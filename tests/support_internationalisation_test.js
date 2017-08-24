(function () {
  module('Support internationalisation', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
      this.actionwords.sut = CoffeeMachine();
    }
  });

  test('No messages are displayed when machine is shut down', function () {
    // Tags: priority:1
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("");
  });

  function messagesAreBasedOnLanguage (language, ready_message) {
    // Well, sometimes, you just get a coffee.
    // Tags: priority:1
    // When I start the coffee machine using language "<language>"
    this.actionwords.iStartTheCoffeeMachineUsingLanguageLang(language);
    // Then message "<ready_message>" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed(ready_message);
  }

  test('Messages are based on language: English', function () {
    messagesAreBasedOnLanguage.apply(this, ['en', 'Ready']);
  });

  test('Messages are based on language: French', function () {
    messagesAreBasedOnLanguage.apply(this, ['fr', 'Pret']);
  });
})();
