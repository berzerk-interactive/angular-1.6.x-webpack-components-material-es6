import helloCtrl from "./hello/hello.ctrl"
import "style-loader!css-loader!sass-loader!../node_modules/angular-material/angular-material.scss";

angular.module('app', [
  'ui.router',
  'ngMaterial'
])
.config(function ($stateProvider, $locationProvider) {
  var helloState = {
      name: 'hello',
      url: '/hello',
      component: 'hello'
    }
  var oneState = {
      name: 'one',
      url: '/one',
      component: 'one'
    }
  var twoState = {
      name: 'two',
      url: '/two',
      component: 'two'
    }
    $stateProvider.state(helloState);
    $stateProvider.state(oneState);
    $stateProvider.state(twoState);
    $locationProvider.html5Mode(true);
})
.component('hello', {
  template: require('./hello/hello.html'),
  controller: helloCtrl
})
.component('one', {
  template: '<h1>one</h1>',
})
.component('two', {
  template: '<h1>two</h1>'
})
