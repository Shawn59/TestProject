"use strict";
// строгий режим по современному стандарту ES5


//настройка маршрутизации
var appRoute = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);
appRoute.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'app/views/mainView.html',
            controller: 'mainController'
        })
        .otherwise("/", {
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});