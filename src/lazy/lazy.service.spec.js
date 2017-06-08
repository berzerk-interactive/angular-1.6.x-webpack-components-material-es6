import lazyService from './lazy.service';

class httpMock {
  get(){
    console.log('it getted');
    return new Promise( (resolve, reject) => {
      resolve('Success!');
      // or
      // reject ("Error!");
    } );
  }
}
describe('lazy', () => {

  describe('lazyService', () => {
    let service;

    beforeEach(() => {
      service = new lazyService(new httpMock);
    });

    it('should contain toggle sidebar', () => {
      expect(service.getServiceData).toExist;
    });
    it('should call getServiceData', () => {
      service.getServiceData()
    });

  });
});
