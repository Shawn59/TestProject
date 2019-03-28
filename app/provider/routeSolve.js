"use strict";
// строгий режим по современному стандарту ES5


//настройка маршрутизации
var appRoute = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);
appRoute.config(function($routeProvider, $locationProvider) {
    var EMAIL_PATTERN = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    $routeProvider
        .when('/main', {
            templateUrl: 'app/views/mainView.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}).constant('myConstants', {
    EMAIL_PATTERN: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
});