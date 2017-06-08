import helloCtrl from './hello.ctrl';

class sidenavServiceMock {
  toggle(){
    console.log('it toggled');
  }
}
describe('hello', () => {

  describe('helloCtrl', () => {
    let ctrl;

    beforeEach(() => {
      // angular.mock.module(app);

      // angular.mock.inject(($controller) => {
      //   ctrl = $controller('AppCtrl', {});
      // });
      ctrl = new helloCtrl(new sidenavServiceMock);
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
