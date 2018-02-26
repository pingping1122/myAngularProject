'use strict';

angular.module('webApp').controller('mainCtrl', function ($scope) {
    $scope.list = [{
        id: 1,
        imgSrc: 'image/company-1.jpg',
        name: '销售',
        companyName: '千度',
        city: '上海',
        industry: '互联网',
        time: '2018-01-01 01:12'
    },
        {
            id: 2,
            imgSrc: 'image/company-2.png',
            name: 'web前端',
            companyName: '慕课',
            city: '北京',
            industry: '互联网',
            time: '2018-01-01 01:12'
        }];
});