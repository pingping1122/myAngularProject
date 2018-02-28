'use strict';
angular.module('webApp')
    .directive('appCompany',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/company.html',
            scope:{
              isActive:'='
            },
            link:function($scope){
              $scope.imagePath=$scope.isActive?'/image/star-active.png':'/image/star.png';
            }
        }
    }]);