import sidenavService from './sidenav.service';

class mdSidenavMock {
  constructor(){
    
  }
  // toggle(name){
  //   console.log('it toggled' + name);
  // }
  toggle(name){
      console.log('it called mdSidenavMock' + name);
      return new Promise( (resolve, reject) => {
        resolve('Success!');
        // or
        // reject ("Error!");
      } );
  }
};
// let mdSidenavMock = new Promise( (resolve, reject) => {
//   resolve('Success!');
//   // or
//   // reject ("Error!");
// } );

let  $logMock = new Promise( (resolve, reject) => {
  resolve('Success!');
  // or
  // reject ("Error!");
} );
describe('Service', () => {

  describe('sidenavService', () => {
    let service;

    beforeEach(() => {
      // angular.mock.module(app);

      // angular.mock.inject(($controller) => {
      //   service = $controller('AppCtrl', {});
      // });
      service = new sidenavService(new mdSidenavMock, $logMock);
    });

    it('should contain toggle sidebar', () => {
      expect(service.toggle).toExist;
    });
    it('should run toggle sidebar', () => {
      service.toggle();
      // log
    });
  });
});
