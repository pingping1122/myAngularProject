/**
 * @desc javascript file
 * @author lpp
 * @date 2017-12-14 14:28
 */
// app1是ui-router的简单示例，仅仅实现了单层嵌套
/*
var app1 = angular.module('myUiRouterApp', ['ui.router']);
app1.config(function ($stateProvider, $urlRouterProvider) {
// $stateProvider.state(stateName,stateConfig);
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<h3>这是home部分</h3>'
    }).state({
        name: 'about',
        url: '/about',
        template: '<h3>这是about部分</h3>'
    })
});*/

// app2是ui-router的深层嵌套
angular.module('myUiRouterApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
// $stateProvider.state(stateName,stateConfig);
        $urlRouterProvider.otherwise('/old');
        $urlRouterProvider.when('/old','/old/page1');
        $stateProvider.state({
            name: 'new',
            url: '/new',
            templateUrl: 'new/new.html',
            controller: 'newCtrl'
        }).state({
            name: 'old',
            url: '/old',
            template: '<div ui-view></div>'
            /*templateUrl: 'old/old.html',
            controller: 'oldCtrl'*/
        })
        /*.state({
                    name: 'old.page1',
                    url: '/page1',
                    template: '<h3>这是old中的page1</h3>'
                })
                .state({
                        name: 'old.page2',
                        url: '/page2',
                        template: '<h3>这是old中的page2</h3>'
                    });*/
        /* .state({
             name: 'old.page1',
             url: '/page1',
             templateUrl:'old/page1/page1.html',
             controller:'oldPage1Ctrl'
         })
         .state({
             name: 'old.page2',
             url: '/page2',
             templateUrl:'old/page2/page2.html',
             controller:'oldPage2Ctrl'
         });*/
    });