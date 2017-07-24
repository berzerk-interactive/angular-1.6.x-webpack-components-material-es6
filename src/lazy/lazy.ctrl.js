/* @ngInject */
class lazyCtrl {
  constructor(sidenavService) {
    'ngInject';
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
}
// lazyCtrl.$inject= ['sidenavService'];
export default lazyCtrl;
