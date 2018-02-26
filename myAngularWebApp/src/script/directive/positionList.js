'use strict';
angular.module('webApp')
    .directive('appPositionList',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/positionList.html',
            scope:{
                data:'='  // 暴露的外部接口 data
            }
        }
    }]);