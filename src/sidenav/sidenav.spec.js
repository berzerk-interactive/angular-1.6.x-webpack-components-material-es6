import sidenavService from './sidenav.service';

function mdSidenavMock(sideNavId) {
      return {toggle: ()=> {
        return new Promise( (resolve, reject) => {
          resolve('Success!');
          // or
          // reject ("Error!");
        } );
      }
    };
}

let  $logMock = new Promise( (resolve, reject) => {
  resolve('Success!');
  // or
  // reject ("Error!");
} );
describe('Service', () => {

  describe('sidenavService', () => {
    let service;

    beforeEach(() => {
      // let sideNavCloseMock = jasmine.createSpy();
      // function mdSidenavMock2(sideNavId) {
      //       return {toggle: sideNavCloseMock }
      // }
      service = new sidenavService(mdSidenavMock, $logMock);
    });

    it('should contain toggle sidebar', () => {
      expect(service.toggle).toExist;
    });
    it('should run toggle sidebar', () => {
      service.toggle();
    });
  });
});
