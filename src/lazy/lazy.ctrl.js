class lazyCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
}
lazyCtrl.$inject= ['sidenavService'];
export default lazyCtrl;
