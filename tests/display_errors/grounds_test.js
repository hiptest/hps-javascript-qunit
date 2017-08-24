(function () {
  module('Grounds', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
      this.actionwords.sut = CoffeeMachine();
      // Given the coffee machine is started
      this.actionwords.theCoffeeMachineIsStarted();
      // And I handle everything except the grounds
      this.actionwords.iHandleEverythingExceptTheGrounds();
    }
  });

  test('Message "Empty grounds" is displayed after 30 coffees are taken', function () {
    // Tags: priority:0
    // When I take "30" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(30);
    // Then message "Empty grounds" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Empty grounds");
  });

  test('When the grounds are emptied, message is removed', function () {
    // Tags: priority:1
    // When I take "30" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(30);
    // And I empty the coffee grounds
    this.actionwords.iEmptyTheCoffeeGrounds();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });
})();
