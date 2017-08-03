function lazyConfig($stateProvider) {
  console.log('registering lazy, foo');

  $stateProvider.state('lazy', {
    url: '/lazy',
    views: {
      side: 'lazySidebar',
      content: 'lazyComponent'
    }
  });

  $stateProvider.state('lazy.foo', {
    url: '/foo',
    component: 'fooComponent',
    resolve: { fooData: () => 'Some foo resolve data' }
  });
}
lazyConfig.$inject = ['$stateProvider'];
export default lazyConfig;
