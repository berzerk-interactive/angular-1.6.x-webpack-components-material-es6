import lazyCtrl from './lazy.ctrl';

class sidenavServiceMock {
  toggle(){
    console.log('it toggled');
  }
}
describe('lazy', () => {

  describe('lazyCtrl', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = new lazyCtrl(new sidenavServiceMock);
    });

    it('should contain toggle sidebar', () => {
      expect(ctrl.toggle).toExist;
    });
    it('should run toggle sidebar', () => {
      ctrl.toggle();
      // log
    });
  });
});
