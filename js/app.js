var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
    .when('/student', {templateUrl: 'partials/student.html', controller: 'StudentCtrl'})
    .when('/instructor', {templateUrl:'partials/instructor.html', controller:'InstructorCtrl'})
    .otherwise('/404', {templateUrl: 'partials/404.html', controller: 'ErrCtrl'});
}]);


app.constant('API_URL', 'https://angulartodofire.firebaseio.com');

// app.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//     .when("/", {templateUrl: 'partials/student.html', controller: 'StudentCtrl'})
//     .when('/instructor', {templateUrl:'partials/instructor.html', controller:'InstructorCtrl'})
//     .otherwise('/404', {templateUrl: 'partials/404.html', controller: 'ErrCtrl'});
// }]);
