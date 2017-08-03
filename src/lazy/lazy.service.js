class lazyService {
  constructor ($http) {
    this.$http = $http;
  }
  getServiceData () {
    return this.$http.get('lazy/serviceData.json').then(resp => resp.data);
  }
}

lazyService.$inject = ['$http'];
export default lazyService;
