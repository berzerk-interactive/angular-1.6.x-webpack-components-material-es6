import appConfig from './config';

class $stateProviderMock {
  state(){
    console.log('state');
    //TODO: extend this mock
  }
}
class $locationProviderMock {
  html5Mode(){
    console.log('html5Mode');
  }
}
class $urlRouterProviderMock {
  otherwise(){
    console.log('otherwise');
  }
}
describe('about', () => {

  describe('config', () => {
    let config;

    beforeEach(() => {
      config = appConfig(new $stateProviderMock, new $locationProviderMock, new $urlRouterProviderMock);
    });

    it('should contain toggle sidebar', () => {
      expect(config).toExist;
      //TODO: extend this test for all the states
    });

  });
});
