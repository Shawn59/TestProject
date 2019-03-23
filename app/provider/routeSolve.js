"use strict";
// строгий режим по современному стандарту ES5

//настройка маршрутизации
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode({enabled:true,requireBase:false});
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