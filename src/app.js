import helloCtrl from "./hello/hello.ctrl"


angular.module('app', [
  'ui.router',
 // 'ngMaterial'
])
.config(function ($stateProvider) {
  var helloState = {
      name: 'hello',
      url: '/hello',
      component: 'hello'
    }
    $stateProvider.state(helloState);
})
.component('hello', {
  template: require('./hello/hello.html'),
  controller: helloCtrl
})
