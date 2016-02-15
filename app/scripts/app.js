'use strict';

/**
 * @ngdoc overview
 * @name lotoratorApp
 * @description
 * # lotoratorApp
 *
 * Main module of the application.
 */
angular
  .module('lotoratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
