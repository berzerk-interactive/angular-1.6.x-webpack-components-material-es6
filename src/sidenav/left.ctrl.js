class LeftCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  close() {
    console.log('close');
    this.sidenavService.toggle();
  }
}
LeftCtrl.$inject = [ 'sidenavService'];
export default LeftCtrl;
