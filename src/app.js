import helloCtrl from "./hello/hello.ctrl"
import "style-loader!css-loader!sass-loader!../node_modules/angular-material/angular-material.scss";

angular.module('app', [
  'ui.router',
  'ngMaterial'
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
