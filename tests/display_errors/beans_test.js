(function () {
  module('Beans', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
      this.actionwords.sut = CoffeeMachine();
      // Given the coffee machine is started
      this.actionwords.theCoffeeMachineIsStarted();
      // And I handle everything except the beans
      this.actionwords.iHandleEverythingExceptTheBeans();
    }
  });

  test('Message "Fill beans" is displayed after 38 coffees are taken', function () {
    // Tags: priority:0
    // When I take "38" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(38);
    // Then message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
  });

  test('It is possible to take 40 coffees before there is really no more beans', function () {
    // Tags: priority:2
    // When I take "40" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(40);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
    // And message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
  });

  test('After adding beans, the message "Fill beans" disappears', function () {
    // Tags: priority:0
    // When I take "40" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(40);
    // And I fill the beans tank
    this.actionwords.iFillTheBeansTank();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });
})();
