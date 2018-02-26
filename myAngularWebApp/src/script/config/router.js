'use strict';
angular.module('webApp')
    .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('main');
    $stateProvider.state('main',
        {
            url:'/main',
            templateUrl:'view/main.html',
            controller:'mainCtrl'
        }
    );
});