function config ($stateProvider, $locationProvider,$urlRouterProvider) {
  const helloState = {
      name: 'hello',
      url: '/hello',
      views: {
        side: 'helloSide',
        content: 'hello',
      }
    }
  const appState = {
    name:'app',
    url: "/",
    redirectTo: 'hello'
  }
  const oneState = {
      name: 'about',
      url: '/about',
      lazyLoad: function determineDate() {
        import('moment').then(function(moment) {
          console.log(moment().format());
        }).catch(function(err) {
          console.log('Failed to load moment', err);
        });
      },
      views: {
        side: 'helloSide',
        content: 'about',
      }
    }
  const twoState = {
      name: 'two',
      url: '/two',
      views: {
        side: 'helloSide',
        content: 'two',
      }
    }
    const lazyState = {
      name: 'lazy.**',
      url: '/lazy',
      //TODO: fix bug with import.then
      // lazyLoad: (transition) => {
      //   import('./lazy/lazy.module').then((module) => {
      //     transition.injector().get('$ocLazyLoad').inject('lazy')
      //     // transition.injector().get('$ocLazyLoad').load('./lazy/lazy.module.js')
      //   })
      //     // transition.injector().get('$ocLazyLoad').inject(import('./lazy/lazy.module'))
      //
      //
      // }
      resolve: {
          foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
              let deferred = $q.defer();
              require.ensure([], function () {
                  let module = require('./lazy/lazy.module.js');
                  $ocLazyLoad.load({
                      name: 'lazy'
                  });
                  deferred.resolve(module);
              });

              return deferred.promise;
          }]
      }
    }
    $stateProvider.state(helloState);
    $stateProvider.state(appState);
    $stateProvider.state(oneState);
    $stateProvider.state(twoState);
    $stateProvider.state(lazyState)
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/hello");

}
config.$inject =['$stateProvider', '$locationProvider','$urlRouterProvider'];
export default config;
