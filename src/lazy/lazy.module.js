
let lazyModule = angular.module('lazy', ['ui.router', 'lazy.bar'])

lazyModule.config($stateProvider => {
  console.log('registering lazy, foo')

  $stateProvider.state('lazy', {
    url: '/lazy',
    // component: 'lazyComponent'
    views: {
      side: 'helloSide',
      content: 'lazyComponent'
    }
  })

  $stateProvider.state('lazy.foo', {
    url: '/foo',
    // component: 'fooComponent',
    views: {
      side: 'helloSide',
      content: 'fooComponent'
    },
    resolve: { fooData: () => 'Some foo resolve data' }
  })
})

lazyModule.service('lazyService', function($http) {
  this.getServiceData = function() {
    // return $http.get('serviceData.json').then(resp => resp.data);
  }
})


lazyModule.component('lazyComponent', {
  template: `
    <h1>Lazy Module component!</h1>
    <a ui-sref=".foo">Foo</a><br>
    <a ui-sref=".bar">Bar</a><br>
    <ui-view></ui-view>
  `
})

lazyModule.component('fooComponent', {
  bindings: { fooData: '<' },
  template: `
    <h3>The foo component</h1>
    {{ $ctrl.fooData }}
  `
});

angular.module('lazy.bar', [])
.config($stateProvider => {
  console.log('registering lazy bar')

   $stateProvider.state('lazy.bar', {
    url: '/bar',
    // component: 'barComponent',
    views: {
      side: 'helloSide',
      content: 'barComponent'
    },
    resolve: { serviceData: (lazyService) => lazyService.getServiceData() }
  });
})
.component('barComponent', {
  bindings: { serviceData: '<' },
  template: `
    <h3>The bar component</h1>
    Data from lazy service:
    <pre>{{ $ctrl.serviceData | json }}</pre>
  `
});
