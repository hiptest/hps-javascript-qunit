(function () {
  module('Can be configured', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
      this.actionwords.sut = CoffeeMachine();
    }
  });

  test('Display settings', function () {
    // Tags: priority:1
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then displayed message is:
    this.actionwords.displayedMessageIs("Settings:\n - 1: water hardness\n - 2: grinder");
  });

  test('Default settings', function () {
    // Tags: priority:0
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then settings should be:
    this.actionwords.settingsShouldBe("| water hardness | 2      |\n| grinder        | medium |");
  });
})();
