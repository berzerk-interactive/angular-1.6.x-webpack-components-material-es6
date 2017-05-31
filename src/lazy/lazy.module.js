
// import lazyCtrl from './lazy.ctrl.js'
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


class lazyCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
}

lazyModule.component('lazyComponent', {
  template: `
    <h1>Lazy Module component!</h1>
    <a ui-sref=".foo">Foo</a><br>
    <a ui-sref=".bar">Bar</a><br>
    <a ng-click="$ctrl.toggle()">toggle side nav</a>
    <ui-view></ui-view>
  `,
  controller: lazyCtrl
})


class lazySidebarCtrl {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  toggle(){
    this.sidenavService.toggle();
  }
}
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
