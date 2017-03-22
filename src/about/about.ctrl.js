class aboutCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
}
aboutCtrl.$inject = ['sidenavService']
export default aboutCtrl;
