import fetchIntercept from './utils/fetch-interceptor';
import helloCtrl from "./hello/hello.ctrl";
import "style-loader!css-loader!sass-loader!../node_modules/angular-material/angular-material.scss";
import config from './config';
import leftCtrl from './sidenav/left.ctrl';
import aboutCtrl from './about/about.ctrl';
import sidenavService from './sidenav/sidenav.service';
angular.module('app', [
  'ui.router',
  'ngMaterial',
  'oc.lazyLoad'
])
.run(()=>{
  const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        console.log('from interceptor', response);
        console.log(typeof response);
        switch (typeof response) {
          case ('object' || 'array'):
            response = response.json()
            break;
          default:

        }
        // Modify the reponse object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});

// Unregister your interceptor
// unregister();
})
.config(config)
.service('sidenavService', sidenavService)
.component('hello', {
  template: require('./hello/hello.html'),
  controller: helloCtrl
})
.component('helloSide', {
  template: '<h1>helloSide</h1>',
})
.component('sideNav', {
  controller: leftCtrl,
  template: require('./sidenav/sidenav.html'),
})
.component('about', {
  controller: aboutCtrl,
  template: require('./about/about.html'),
})
.component('two', {
  template: '<h1>two</h1>'
});
