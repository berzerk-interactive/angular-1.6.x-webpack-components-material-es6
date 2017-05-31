class lazySidebarCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
}
lazySidebarCtrl.$inject= ['sidenavService'];
export default lazySidebarCtrl;
