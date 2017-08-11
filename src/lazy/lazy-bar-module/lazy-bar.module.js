import lazyBarConfig from './lazy-bar.config';
import lazyBarCtrl from './lazy-bar.ctrl';
let lazyBarModule = angular.module('lazy.bar', [])
.config(lazyBarConfig)
.component('barComponent', {
  bindings: { serviceData: '<' },
  controller: lazyBarCtrl,
  template: require('./lazy-bar.html')
});

export default lazyBarModule;
