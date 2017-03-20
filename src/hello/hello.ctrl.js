class helloCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
  $onInit(){

  }
}
helloCtrl.$inject= ['sidenavService'];
export default helloCtrl;
