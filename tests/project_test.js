(function () {
  module('Coffee machine - Hiptest publisher sample', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
      this.actionwords.sut = CoffeeMachine();
    }
  });

  test('Simple use', function () {
    // Well, sometimes, you just get a coffee.
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
  });

  test('Water runs away', function () {
    // Simple scenario showing that after 50 coffees, the "Fill tank" message is displayed but it is still possible to have coffee until the tank is fully empty.
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When fifty coffees have been taken without filling the tank
    this.actionwords.fiftyCoffeesHaveBeenTakenWithoutFillingTheTank();
    // Then message "Fill tank" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill tank");
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // When I take "10" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(10);
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
    // And message "Fill tank" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill tank");
    // When I fill the water tank
    this.actionwords.iFillTheWaterTank();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });

  test('Beans run out', function () {
    // Simple scenario showing that after 38 coffees, the message "Fill beans" is displayed but it is possible to take two coffees until there is no more beans.
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When thirty eight coffees are taken without filling beans
    this.actionwords.thirtyEightCoffeesAreTakenWithoutFillingBeans();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // And message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
    // When I take "2" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(2);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // And message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
  });

  test('Full grounds does not block coffee', function () {
    // You keep getting coffee even if the "Empty grounds" message is displayed. That said it's not a fantastic idea, you'll get ground everywhere when you'll decide to empty it.
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take "29" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(29);
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // And message "Empty grounds" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Empty grounds");
    // When I fill the water tank
    this.actionwords.iFillTheWaterTank();
    // And I fill the beans tank
    this.actionwords.iFillTheBeansTank();
    // And I take "20" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(20);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // And message "Empty grounds" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Empty grounds");
  });

  function messagesAreBasedOnLanguage (lang, ready_message) {
    // Well, sometimes, you just get a coffee.
    // When I start the coffee machine "<lang>"
    this.actionwords.iStartTheCoffeeMachine(lang);
    // Then message "<ready_message>" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed(ready_message);
  }

  test('Messages are based on language: English', function () {
    messagesAreBasedOnLanguage.apply(this, ['en', 'Ready']);
  });

  test('Messages are based on language: French', function () {
    messagesAreBasedOnLanguage.apply(this, ['fr', 'Pret']);
  });


  test('No messages are displayed when machine is shut down', function () {
    // Tags: plop
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed();
  });
})();
