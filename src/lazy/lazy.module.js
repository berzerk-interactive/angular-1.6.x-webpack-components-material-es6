
import lazyCtrl from './lazy.ctrl.js';
import lazySidebarCtrl from './lazy-sidebar/lazy-sidebar.ctrl.js';
import lazyService from './lazy.service';
import lazyBarModule from './lazy-bar-module/lazy-bar.module';
import lazyConfig from './lazy.config';

import './lazy.scss';

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
.config(lazyConfig)
.service('lazyService', lazyService);
lazyModule.$inject = ['ui.router', 'lazy.bar'];
export default lazyBarModule;
