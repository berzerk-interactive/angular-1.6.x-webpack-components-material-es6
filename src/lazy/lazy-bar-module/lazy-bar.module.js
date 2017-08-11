import lazyBarConfig from './lazy-bar.config';
import lazyBarCtrl from './lazy-bar.ctrl';
let lazyBarModule = angular.module('lazy.bar', [])
.config(lazyBarConfig)
.component('barComponent', {
  bindings: { serviceData: '<' },
  controller: lazyBarCtrl,
  template: `
    <h3>The bar component</h1>
    Data from lazy service:
    <pre>{{ $ctrl.serviceData | json }}</pre>
    <md-button class="md-raised" ng-click="$ctrl.failedFetch()">Make a fetch call that will 404 (to demo interceptor)</md-button>
  `

});

export default lazyBarModule;
