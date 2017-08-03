class aboutCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
  $onInit(){
    this.paragraph = 'This state lazy loads moment js on state change to it';
  }
}
aboutCtrl.$inject = ['sidenavService'];
export default aboutCtrl;
