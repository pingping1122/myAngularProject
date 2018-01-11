angular.module('regModule', [])
    .controller('regCtrl', function ($scope) {
        $scope.userData = {};
        $scope.submitForm = function () {
            if ($scope.regForm.$invalid) {
                alert('请检查表单信息！');
            } else {
                alert('提交表单成功！');
            }
        }
    })
    .directive('compare', function () {
        var obj = {};
        // 指令模式为"AE" 属性和元素
        obj.restrict = 'AE';
        // scope可为true、false、和{}
        // true--创建的指令要创建一个新的作用域，这个作用域继承自我们的父作用域
        // false--在指令模板中可以直接使用父作用域中的变量，函数
        // {}--创建的一个新的与父作用域隔离的新的作用域，这使我们在不知道外部环境的情况下，就可以正常工作，不依赖外部环境
        // {}--"="双向绑定、"@"单向绑定、"&"函数绑定
        obj.scope = {
            orgText: '=compare'
        };
        // 指令中一旦声明了require,则链接函数具有第四个参数:controller
        obj.require = 'ngModel';
        obj.link = function (scope, element, attr, controller) {
            controller.$validators.compare = function (value) {
                // value就是用户输入的值
                return value === scope.orgText;
            };
            // 时刻监听旧值
            scope.$watch('orgText', function () {
                controller.$validate();
            });
        };
        return obj;
    });