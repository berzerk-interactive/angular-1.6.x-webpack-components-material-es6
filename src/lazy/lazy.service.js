/* @ngInject */
class lazyService {
  constructor ($http) {
    this.$http = $http
  }
  getServiceData () {
    return this.$http.get('assets/service.data.json').then(resp => resp.data)
  }
}

// lazyService.$inject = ['$http']
export default lazyService
