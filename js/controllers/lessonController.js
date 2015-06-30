app.controller('LessonCtrl', ['$rootScope', '$scope', 'Lesson', function($rootScope, $scope, Lesson){
  $scope.addLesson = function () {
    var id = $rootScope.auth.uid.replace(':', '%3A');
    Lesson.addLesson(id, $scope.newLesson, function () {
      console.log('Lesson Created!!!')
      $scope.newLesson = {};
        Lesson.getMyLessons(id, function (lessons) {
          $scope.lessons = lessons;
        });
    });
  };


}]);
