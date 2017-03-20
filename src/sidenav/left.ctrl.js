class LeftCtrl {
  constructor($mdSidenav, $log) {
    this.$mdSidenav = $mdSidenav;
    this.$log = $log;
  }
  close() {
    // Component lookup should always be available since we are not using `ng-if`
    this.$mdSidenav('left').close()
      .then(function () {
        this.$log.debug("close LEFT is done");
      });

  };
}
LeftCtrl.$inject = [ '$mdSidenav', '$log']
export default LeftCtrl;
