function config ($stateProvider, $locationProvider,$urlRouterProvider) {
  var helloState = {
      name: 'hello',
      url: '/hello',
      // component: 'hello'
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
      name: 'one',
      url: '/one',
      views: {
        side: 'helloSide',
        content: 'one',
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
