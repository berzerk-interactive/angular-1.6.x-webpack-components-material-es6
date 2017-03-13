import helloCtrl from "./hello/hello.ctrl"
import "style-loader!css-loader!sass-loader!../node_modules/angular-material/angular-material.scss";
import config from './config'
angular.module('app', [
  'ui.router',
  'ngMaterial'
])
.config(config)
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
