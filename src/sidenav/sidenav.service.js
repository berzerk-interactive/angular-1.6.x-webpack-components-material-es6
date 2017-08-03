class sidenavService {
    constructor($mdSidenav, $log) {
      this.toggle = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').toggle()
          .then(function () {
            $log.debug("toggle LEFT is done");
          });

      };

  }
}
sidenavService.$inject = ['$mdSidenav', '$log'];
export default sidenavService;
