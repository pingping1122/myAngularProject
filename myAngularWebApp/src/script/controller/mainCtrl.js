/*
* 主页面
* */

'use strict';

angular.module('webApp').controller('mainCtrl',function ($http,$scope) {
    $http.get('/data/positionList.json').then(function(result){
        $scope.list=result.data;
    }).catch(function(errorMsg){
    });
});