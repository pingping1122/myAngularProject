var app = angular.module('myphonecatApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
        .when('/', {
            templateUrl: 'phone-list/phone-list.html',
            controller: 'phonelistCtrl'
        })
        .when('/detail', {
            templateUrl: 'phone-detail/phone-detail.html',
            controller: 'phonedetailCtrl'
        }).otherwise({redirectTo: '/'});
}]);

