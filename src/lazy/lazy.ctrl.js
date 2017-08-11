class lazyCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
  failPost () {
    const testData = {
      thing1: 'thing1',
      thing2: 'thing2'
    };
    // NOTE: you would have to stringify the body json if the interceptor didn't handle it
    // return fetch('fake/endpoint/that/will/fail', {method: 'POST', body: JSON.stringify(testData)});
    return fetch('fake/endpoint/that/will/fail', {method: 'POST', body: testData});
  }
}
lazyCtrl.$inject= ['sidenavService'];
export default lazyCtrl;
