var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $rootScope, $location, $http, myService) {
    $scope.name = "test module+controller";

    $scope.names = ['Li', 'Wang', 'Qi', 'Tan'];
    $rootScope.lastName = "Emily";

    $scope.msg = "li  Emily";

    //1.获取当前完整的url路径
    $scope.absurl = $location.absUrl();

    //2. 获取当前url路径(当前url#后面的内容,包括参数和哈希值):
    $scope.url = $location.url();

    //3. 获取当前url的子路径(也就是当前url#后面的内容,不包括参数)
    $scope.pathUrl = $location.path();

    //4.获取当前url的协议(比如http,https)
    $scope.protocol = $location.protocol();

    //5.获取主机名
    $scope.localhost = $location.host();

    //6.获取当前url的端口
    $scope.port = $location.port();

    //7.获取当前url的哈希值
    $scope.hash = $location.hash();

    //8.获取当前url的参数的序列化json对象
    $scope.search = $location.search();

    $http.get('../php/data/sites.php').then(function (response) {
        console.log(response);
    });
    $http({
        method: 'get',
        url: '../php/data/sites.php',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
    }).then(function successCallbBack(response) {
        // 请求成功的执行代码
    }, function errorCallback(response) {
        // 请求失败的执行代码
    });

    $scope.serviceData = myService.addStr(255);

});
// 自定义过滤器--实现字符串反转
app.filter('reverse', function () {
    return function (text) {
        return text.split('').reverse().join('');

    }
});
// 自定义service
app.service('myService', function () {
    return {
        addStr: function (x) {
            return x + '---myservice---';
        }
    }
    /*this.func=function(x){
        return x+'---myservice---';
    }*/

});

// bootstrap实现的表单验证
var bootstrapApp = angular.module('myBootstrapApp', []);
bootstrapApp.controller('myBootstrapCtrl', function ($scope, myBootstrapService) {
    $scope.testBootstrap = 'testtest';
    $scope.userData = myBootstrapService.getData();
    $scope.page = {
        fName: '',
        lName: '',
        pass1: '',
        pass2: '',
        edit: false, // 是否是编辑
        error: false, // pass1与pass2是否相同
        incomplete: false, // 表单是否填写完整
    };
    $scope.editUser = function (id) {
        if (id === 0) {
            $scope.page.edit = false;
            $scope.page.fName = '';
            $scope.page.lName = '';
        } else {
            $scope.page.edit = true;
            $scope.page.fName = $scope.userData[id - 1].fName;
            $scope.page.lName = $scope.userData[id - 1].lName;
        }
    };

    $scope.$watch('page.pass1', function () {
        $scope.test();
    });
    $scope.$watch('page.pass2', function () {
        $scope.test();
    });
    $scope.$watch('page.fName', function () {
        $scope.test();
    });
    $scope.$watch('page.lName', function () {
        $scope.test();
    });
    $scope.test = function () {
        if ($scope.page.pass1 !== $scope.page.pass2) {
            $scope.page.error = true;
        } else {
            $scope.page.error = false;
        }
        $scope.page.incomplete = false;
        if ((!$scope.edit) &&
            ($scope.page.fName.length === 0
                || $scope.page.lName.length === 0
                || $scope.page.pass1.length === 0
                || $scope.page.pass2.length === 0)) {
            $scope.page.incomplete = true;
        }
    }
});
bootstrapApp.service('myBootstrapService', function () {
    var users;
    this.getData = function () {
        users = [
            {id: 1, fName: 'Hege', lName: "Pege"},
            {id: 2, fName: 'Kim', lName: "Pim"},
            {id: 3, fName: 'Sal', lName: "Smith"},
            {id: 4, fName: 'Jack', lName: "Jones"},
            {id: 5, fName: 'John', lName: "Doe"},
            {id: 6, fName: 'Peter', lName: "Pan"}
        ];
        return users;
    }
});

// ng-route的实例
angular.module('routingDemoApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
        $routeProvider
            .when('/', {template: '这是首页页面'})
            .when('/detail', {template: '这是详情页'})
            .otherwise({redirectTo: '/'});
    }]);

// angular--form表单内置的css样式+内置校验器
app.controller('formCtrl', function ($scope) {
    // mySimpleForm
    $scope.user1 = {
        name: '',
        email: ''
    };
    $scope.save = function () {
        console.log('点击了保存按钮！！！');
        alert('form表单提交');
    };


    // myComplexForm
    $scope.user = {
        name: '',
        email: '',
        gender: 'male',
        agree: false,
        agreeSign: ''
    };
    $scope.reset = function () {
        $scope.user.name = '';
        $scope.user.email = '';
        $scope.user.gender = 'male';
        $scope.user.agree = false;
        $scope.user.agreeSign = '';
    };
    $scope.update = function (user) {

    };
    $scope.isUnchanged = function (user) {

    }
});