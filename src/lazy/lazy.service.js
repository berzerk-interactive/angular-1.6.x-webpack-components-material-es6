class lazyService {
  constructor ($http) {
    this.$http = $http;
  }
  getServiceData () {
    // return this.$http.get('lazy/serviceData.json').then(resp => resp.data);
    // return fetch('lazy/serviceData.json').then(resp => resp.json()).then(resp => console.log('resp from service', resp));
    // return fetch('lazy/serviceData.json').then(resp => console.log('resp from service', resp));
    return fetch('lazy/serviceData.json').then(resp => resp);
  }
}

lazyService.$inject = ['$http'];
export default lazyService;
