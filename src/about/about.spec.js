import aboutCtrl from './about.ctrl';

class sidenavServiceMock {
  toggle(){
    console.log('it toggled');
  }
}
describe('about', () => {

  describe('aboutCtrl', () => {
    let ctrl;

    beforeEach(() => {
      // angular.mock.module(app);

      // angular.mock.inject(($controller) => {
      //   ctrl = $controller('AppCtrl', {});
      // });
      ctrl = new aboutCtrl(new sidenavServiceMock);
    });

    it('should contain toggle sidebar', () => {
      expect(ctrl.toggle).toExist;
    });
    it('should run toggle sidebar', () => {
      ctrl.toggle();
      // TODO: extend test here
    });
    it('should have paragraph after onInit', () => {
      ctrl.$onInit();
      expect(ctrl.paragraph).toBe('This state lazy loads moment js on state change to it');
    });
  });
});
