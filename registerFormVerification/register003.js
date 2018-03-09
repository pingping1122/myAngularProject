angular.module('regModule', [])
    .controller('regCtrl', function ($scope) {
        $scope.userData = {};
        $scope.passwordRule = false;
        $scope.passCheckResult = {
            lengthRequired: {},
            charPattern: {}
        };
        $scope.passCheckResult.lengthRequired = {
            empty: true,
            error: false,
            success: false
        };
        $scope.passCheckResult.charPattern = {
            empty: true,
            error: false,
            success: false
        };
        $scope.passCheckResult.blankPattern = {
            empty: true,
            error: false,
            success: false
        };
        $scope.submitForm = function () {
            if ($scope.regForm.$invalid) {
                alert('请检查表单信息！');
            } else {
                alert('提交表单成功！');
            }
        };
        /*$scope.changePass = function () {
            var str = $scope.userData.password;
            var objReg1 = /[0-9]{1,}/;
            var objReg2 = /[a-z]{1,}/;
            var objReg3 = /[A-Z]{1,}/;
            var objReg4 = /[~!@#%&_=;:`'",<>\\/\(\)\[\]\{\}\^\$\|\?\*\+\.\-]{1,}/;
            if ($scope.userData.password === ''
                || $scope.userData.password === undefined) {
                $scope.passCheckResult.lengthRequired.empty = true;
                $scope.passCheckResult.lengthRequired.error = false;
                $scope.passCheckResult.lengthRequired.success = false;
                $scope.passCheckResult.charPattern.empty = true;
                $scope.passCheckResult.charPattern.error = false;
                $scope.passCheckResult.charPattern.success = false;
                $scope.passCheckResult.blankPattern.empty = true;
                $scope.passCheckResult.blankPattern.error = false;
                $scope.passCheckResult.blankPattern.success = false;
            } else {
                if (str.length > 8 && str.length < 32) {
                    $scope.passCheckResult.lengthRequired.empty = false;
                    $scope.passCheckResult.lengthRequired.error = false;
                    $scope.passCheckResult.lengthRequired.success = true;
                } else if (str.length < 8 || str.length > 32) {
                    $scope.passCheckResult.lengthRequired.empty = false;
                    $scope.passCheckResult.lengthRequired.error = true;
                    $scope.passCheckResult.lengthRequired.success = false;
                }
                if (objReg1.test(str) && objReg2.test(str) && objReg3.test(str)
                    || objReg1.test(str) && objReg3.test(str) && objReg4.test(str)
                    || objReg1.test(str) && objReg2.test(str) && objReg4.test(str)
                    || objReg2.test(str) && objReg3.test(str) && objReg4.test(str)) {
                    $scope.passCheckResult.charPattern.empty = false;
                    $scope.passCheckResult.charPattern.error = false;
                    $scope.passCheckResult.charPattern.success = true;
                } else {
                    $scope.passCheckResult.charPattern.empty = false;
                    $scope.passCheckResult.charPattern.error = true;
                    $scope.passCheckResult.charPattern.success = false;
                }
                if (str.indexOf(' ') > -1) {
                    $scope.passCheckResult.blankPattern.empty = false;
                    $scope.passCheckResult.blankPattern.error = true;
                    $scope.passCheckResult.blankPattern.success = false;
                } else {
                    $scope.passCheckResult.blankPattern.empty = false;
                    $scope.passCheckResult.blankPattern.error = false;
                    $scope.passCheckResult.blankPattern.success = true;
                }
            }
            if ($scope.passCheckResult.charPattern.success
                && $scope.passCheckResult.lengthRequired.success
                && $scope.passCheckResult.blankPattern.success) {
                $scope.regForm.pass.$valid = true;
                $scope.regForm.pass.$invalid = false;
            } else {
                $scope.regForm.pass.$valid = false;
                $scope.regForm.pass.$invalid = true;
            }
        }*/
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
                // value就是用户输入的值---密码确认项输入
                // scope.orgText---赋值给compare的值---也即本例中的密码输入值
                console.log(scope.orgText);
                console.log(value);
                return value === scope.orgText;
            };
            // 时刻监听旧值
            scope.$watch('orgText', function () {
                controller.$validate();
            });
        };
        return obj;
    })
    .directive('passcheck', function () {
        var obj = {};
        // 指令模式为"AE" 属性和元素
        obj.restrict = 'AE';
        obj.require = 'ngModel';
        obj.link = function (scope, element, attr, controller) {
            /*为空*/
            controller.$validators.empty = function (value) {
                console.log(value);
                return value === '' || value === undefined
            };
            /*长度8-32*/
            controller.$validators.lengthOk = function (value) {
                if (value !== '' && value !== undefined) {
                    return value.length >= 8 && value.length <= 32
                }
            };
            /*空格*/
            controller.$validators.blank = function (value) {
                if (value !== '' && value !== undefined) {
                    return value.indexOf(' ') > -1
                }
            };
            /*数字、大写字母、小写字母及特殊字符至少包含3种*/
            controller.$validators.charPattern = function (value) {
                var objReg1 = /[0-9]{1,}/;
                var objReg2 = /[a-z]{1,}/;
                var objReg3 = /[A-Z]{1,}/;
                var objReg4 = /[~!@#%&_=;:`'",<>\\/\(\)\[\]\{\}\^\$\|\?\*\+\.\-]{1,}/;
                if (value !== '' && value !== undefined) {
                    return objReg1.test(value) && objReg2.test(value) && objReg3.test(value)
                        || objReg1.test(value) && objReg3.test(value) && objReg4.test(value)
                        || objReg1.test(value) && objReg2.test(value) && objReg4.test(value)
                        || objReg2.test(value) && objReg3.test(value) && objReg4.test(value)
                }
            };
        };
        return obj;
    });