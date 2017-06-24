import lazyBarConfig from './lazy-bar.config';
let lazyBarModule = angular.module('lazy.bar', [])
.config(lazyBarConfig)
.component('barComponent', {
  bindings: { serviceData: '<' },
  template: `
    <h3>The bar component</h1>
    Data from lazy service:
    <pre>{{ $ctrl.serviceData | json }}</pre>
  `
});

export default lazyBarModule;
