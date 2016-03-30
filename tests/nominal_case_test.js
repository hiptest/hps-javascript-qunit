(function () {
  module('Nominal case', {
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
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed();
  });
})();
