import appConfig from './config';

class $stateProviderMock {
  constructor(){
    this.states =[];
  }
  state(state){
    console.log(state);
    this.states.push(state);
    //TODO: extend this mock
  }
  get(){
    return this.states;
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
class $ocLazyLoadProviderMock {
  config(){}
}
describe('about', () => {

  describe('config', () => {
    let config;

    beforeEach(() => {
      config = appConfig(new $stateProviderMock, new $locationProviderMock, new $urlRouterProviderMock, new $ocLazyLoadProviderMock);
    });

    it('should contain toggle sidebar', () => {
      expect(config).toExist;
      //TODO: extend this test for all the states
    });
    // it('should have all the states', () => {
    //   expect(config.registeredStates).toBe(6)
    // })

  });
});
