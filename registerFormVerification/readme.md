注册页面表单验证：
* -------使用angularjs的表单验证特性实现
* -------确认密码使用指令实现
* -------ng-model
* -------ng-submit
* -------ng-class
* -------ng-if/ng-show
* -------ng-disabled

效果图:
![注册表单验证](https://github.com/pingping1122/myAngularProject/images/registerForm.png)

[1]表单建立
[2]小知识点

* pre标签--可辅助用于打印input输入信息

* required ---不能为空

* $touched---碰过该项

* 在设置了相应input限制之后如果不满足条件，ng-model值为undefined,只有其满足条件，ng-model才有值；

[3]传入用户数据和验证数据规则
[4]自定义compare指定实现两次密码对比
[5]显示错误信息和通过信息
[6]font awesome图标