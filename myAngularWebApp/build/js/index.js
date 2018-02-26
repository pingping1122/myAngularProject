'use strict';
angular.module('webApp',['ui.router']);


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
'use strict';
angular.module('webApp')
    .directive('appFoot',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/foot.html'
        }
    }]);

'use strict';
angular.module('webApp')
    .directive('appHead',[ function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/head.html'
        }
    }]);

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