var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: 'partials/home.html', controller: 'MainCtrl'})
    .when('/user', {templateUrl: 'partials/user.html', controller: 'UserCtrl'})
    .when('/instructor', {templateUrl:'partials/instructor.html', controller:'InstructorCtrl'})
    .otherwise('/404', {templateUrl: 'partials/404.html', controller: 'ErrCtrl'});
}]);


app.constant('API_URL', 'https://book-that-lesson.firebaseio.com/');

