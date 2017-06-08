import lazySidebarCtrl from './lazy-sidebar.ctrl';

class sidenavServiceMock {
  toggle(){
    console.log('it toggled');
  }
}
describe('lazy sidebar', () => {

  describe('lazySidebarCtrl', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = new lazySidebarCtrl(new sidenavServiceMock);
    });

    it('should contain toggle sidebar', () => {
      expect(ctrl.toggle).toExist;
    });
    it('should run toggle sidebar', () => {
      ctrl.toggle();
      // TODO: extend test here
    });
  });
});
