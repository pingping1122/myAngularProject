angular.module('regModule', [])
    .controller('regCtrl', function ($scope) {
        $scope.userData = {
            password:'',
            password2:'1212'
        };
        $scope.passwordRule = false;
        $scope.submitForm = function () {
            if ($scope.regForm.$invalid) {
                alert('请检查表单信息！');
            } else {
                alert('提交表单成功！');
            }
        };
        $scope.test="测试双向绑定";
    })
    .directive('compare', function () {
        var obj = {};
        obj.restrict = 'AE';
        obj.scope = {
            orgText: '=compare'
        };
        obj.require = 'ngModel';
        obj.controller=function($scope,$element,$attrs,$transclude){
            this.getValue=function(){
            //    $scope.
            }
        };
        obj.link = function (scope, element, attr, controller) {
            controller.$validators.compare = function (value) {
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
                    console.log(value);
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