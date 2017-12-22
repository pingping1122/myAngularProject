/**
 * @desc javascript file
 * @author lpp
 * @date 2017-12-14 14:28
 */

angular.module('myUiRouterApp')
    .config(function ($stateProvider, $urlRouterProvider) {
       // $urlRouterProvider.otherwise('/page1');

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
        $stateProvider.state({
            name: 'old.page1',
            url: '/page1',
            templateUrl: 'old/page1/page1.html',
            controller: 'oldPage1Ctrl'
        })
            .state({
                name: 'old.page2',
                url: '/page2',
                templateUrl: 'old/page2/page2.html',
                controller: 'oldPage2Ctrl'
            });
    });