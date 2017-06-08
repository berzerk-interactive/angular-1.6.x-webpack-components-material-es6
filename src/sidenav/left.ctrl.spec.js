import left from './left.ctrl';

class sidenavServiceMock {
  toggle(){
    console.log('it toggled');
  }
}
describe('about', () => {

  describe('left', () => {
    let ctrl;

    beforeEach(() => {
      // angular.mock.module(app);

      // angular.mock.inject(($controller) => {
      //   ctrl = $controller('AppCtrl', {});
      // });
      ctrl = new left(new sidenavServiceMock);
    });

    it('should contain toggle sidebar', () => {
      expect(ctrl.toggle).toExist;
    });
    it('should run toggle sidebar', () => {
      ctrl.close();
      // TODO: extend test here
    });
  });
});
