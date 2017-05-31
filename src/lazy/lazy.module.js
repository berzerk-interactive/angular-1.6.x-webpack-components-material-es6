
import lazyCtrl from './lazy.ctrl.js'
import lazySidebarCtrl from './lazy-sidebar/lazy-sidebar.ctrl.js'
import lazyService from './lazy.service'
import lazyBarModule from './lazy-bar-module/lazy-bar.module'

import './lazy.scss'

let lazyModule = angular.module('lazy', ['ui.router', 'lazy.bar'])
.component('lazyComponent', {
  template: require('./lazy.component.html'),
  controller: lazyCtrl
})
.component('lazySidebar', {
  template: require('./lazy-sidebar/lazy-sidebar.html'),
  controller: lazySidebarCtrl
})
.component('fooComponent', {
  bindings: { fooData: '<' },
  template: `
    <h3>The foo component</h1>
    {{ $ctrl.fooData }}
  `
})
.config($stateProvider => {
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
.service('lazyService', lazyService)
