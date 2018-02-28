'use strict';
angular.module('webApp')
    .directive('appPositionClass',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/positionClass.html',
          /*  scope:{
              isActive:'='
            },
            link:function($scope){
              $scope.imagePath=$scope.isActive?'/image/star-active.png':'/image/star.png';
            }*/
        }
    }]);