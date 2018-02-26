'use strict';
angular.module('webApp')
    .directive('appHead',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/head.html'
        }
    }]);
