(function () {
  module('Can be configured', {
    setup: function () {
      this.actionwords = Object.create(Actionwords);
      this.actionwords.sut = CoffeeMachine();
    }
  });

  test('Display settings', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then displayed message is:
    this.actionwords.displayedMessageIs("Settings:\n - 1: water hardness\n - 2: grinder");
  });

  test('Default settings', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then settings should be: "| water hardness | 2      |
    // | grinder        | medium |"
    this.actionwords.settingsShouldBe("| water hardness | 2      |\n| grinder        | medium |");
  });
})();
