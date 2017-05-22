function config ($stateProvider, $locationProvider,$urlRouterProvider) {
  var helloState = {
      name: 'hello',
      url: '/hello',
      views: {
        side: 'helloSide',
        content: 'hello',
      }
    }
  var appState = {
    name:'app',
    url: "/",
    redirectTo: 'hello'
  }
  var oneState = {
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
  var twoState = {
      name: 'two',
      url: '/two',
      views: {
        side: 'helloSide',
        content: 'two',
      }
    }
    $stateProvider.state(helloState);
    $stateProvider.state(appState);
    $stateProvider.state(oneState);
    $stateProvider.state(twoState);
    $locationProvider.html5Mode(true);
   $urlRouterProvider.otherwise("/hello");

}
config.$inject =['$stateProvider', '$locationProvider','$urlRouterProvider'];
export default config;
