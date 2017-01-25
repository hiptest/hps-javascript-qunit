var Actionwords = {
  iStartTheCoffeeMachineUsingLanguageLang: function (lang) {
    this.sut.start(lang);
  },

  iShutdownTheCoffeeMachine: function () {
    this.sut.stop();
  },

  messageMessageShouldBeDisplayed: function (message) {
    equal(this.sut.get('message'), message || "");
  },

  coffeeShouldBeServed: function () {
    equal(this.sut.get('coffeeServed'), true);
  },

  coffeeShouldNotBeServed: function () {
    equal(this.sut.get('coffeeServed'), false);
  },

  iTakeACoffee: function () {
    this.sut.takeCoffee();
  },

  iEmptyTheCoffeeGrounds: function () {
    this.sut.emptyGrounds();
  },

  iFillTheBeansTank: function () {
    this.sut.fillBeans();
  },

  iFillTheWaterTank: function () {
    this.sut.fillTank();
  },

  iTakeCoffeeNumberCoffees: function (coffee_number) {
    this.handled = this.handled || [];

    while ((coffee_number > 0)) {
      this.iTakeACoffee();
      coffee_number = coffee_number - 1;

      if (this.handled.indexOf('water') >= 0) {
        this.iFillTheWaterTank();
      }

      if (this.handled.indexOf('beans') >= 0) {
        this.iFillTheBeansTank();
      }

      if (this.handled.indexOf('grounds') >= 0) {
        this.iEmptyTheCoffeeGrounds();
      }
    }
  },

  theCoffeeMachineIsStarted: function () {
    this.iStartTheCoffeeMachineUsingLanguageLang();
  },

  iHandleWaterTank: function () {
    this.handled = this.handled || [];
    this.handled.push('water');
  },

  iHandleBeans: function () {
    this.handled = this.handled || [];
    this.handled.push('beans');
  },

  iHandleCoffeeGrounds: function () {
    this.handled = this.handled || [];
    this.handled.push('grounds');
  },

  iHandleEverythingExceptTheWaterTank: function () {
    this.iHandleCoffeeGrounds();
    this.iHandleBeans();
  },

  iHandleEverythingExceptTheBeans: function () {
    this.iHandleWaterTank();
    this.iHandleCoffeeGrounds();
  },

  iHandleEverythingExceptTheGrounds: function () {
    this.iHandleWaterTank();
    this.iHandleBeans();
  },

  displayedMessageIs: function (__free_text) {
    this.messageMessageShouldBeDisplayed(__free_text);
  },

  iSwitchToSettingsMode: function () {
    this.sut.showSettings();
  },

  settingsShouldBe: function (__datatable) {
    let settings = {}
    __datatable.split("\n").forEach(line => {
      let cells = line.split('|');
      settings[cells[1].trim()] = cells[2].trim();
    })

    deepEqual(settings, this.sut.getSettings());
  }
};