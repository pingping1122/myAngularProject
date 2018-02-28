/*
* 职位详情页
* */
'use strict';

angular.module('webApp').controller('positionCtrl', function ($scope,$http,$state) {
    $scope.isLogin=false;
    $http.get('/data/position?id='+$state.params.id).catch(function(result){
        console.log(result);
        $scope.position=result.data;
    })
});