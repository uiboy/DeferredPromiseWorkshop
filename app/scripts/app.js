'use strict';

angular.module('deferredApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slide1', {
        templateUrl: 'views/slide1.html',
        controller: 'MainCtrl'
      })
        .when('/slide2', {
        templateUrl: 'views/slide2.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
