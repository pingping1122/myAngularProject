'use strict';
angular.module('webApp')
    .directive('appFoot',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/foot.html'
        }
    }]);
