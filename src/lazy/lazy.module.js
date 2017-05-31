
import lazyCtrl from './lazy.ctrl.js'
import lazySidebarCtrl from './lazy-sidebar.ctrl.js'
import './lazy.scss'
let lazyModule = angular.module('lazy', ['ui.router', 'lazy.bar'])



lazyModule.config($stateProvider => {
  console.log('registering lazy, foo')

  $stateProvider.state('lazy', {
    url: '/lazy',
    views: {
      side: 'lazySidebar',
      content: 'lazyComponent'
    }
  })

  $stateProvider.state('lazy.foo', {
    url: '/foo',
    component: 'fooComponent',
    resolve: { fooData: () => 'Some foo resolve data' }
  })
})

lazyModule.service('lazyService', function($http) {
  this.getServiceData = function() {
    return $http.get('lazy/serviceData.json').then(resp => resp.data);
  }
})


lazyModule.component('lazyComponent', {
  template: `
    <h1>Lazy Module component!</h1>
    <ul>
      <li><a ui-sref=".foo">Foo</a></li>
      <li><a ui-sref=".bar">Bar</a></li>
      <li><a ng-click="$ctrl.toggle()">toggle side nav</a></li>
    </ul>
    <ui-view></ui-view>
  `,
  controller: lazyCtrl
})

lazyModule.component('lazySidebar', {
  template: `
    <h1>Lazy Module sidebar!</h1>
    <a ui-sref=".foo">Foo</a><br>
    <a ui-sref=".bar">Bar</a><br>
    <a ng-click="$ctrl.toggle()">toggle side nav</a>
  `,
  controller: lazySidebarCtrl
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
    component: 'barComponent',
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
