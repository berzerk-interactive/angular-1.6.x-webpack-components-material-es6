function lazyBarConfig ($stateProvider) {
  console.log('registering lazy bar');

  $stateProvider.state('lazy.bar', {
    url: '/bar',
    component: 'barComponent',
    resolve: { serviceData: (lazyService) => lazyService.getServiceData() }
  });
}
lazyBarConfig.$inject = ['$stateProvider'];
export default lazyBarConfig;
