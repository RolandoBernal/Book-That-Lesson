app.controller('LessonCtrl', ['$rootScope', '$scope', '$location', 'Lesson', function($rootScope, $scope, $location, Lesson){
  var id = $rootScope.auth.uid.replace(':', '%3A');
  $scope.addLesson = function () {
    Lesson.addLesson(id, $scope.newLesson, function () {
      console.log('Lesson Created!!!')
      $scope.newLesson = {};
        Lesson.getMyLessons(id, function (lessons) {
          $scope.lessons = lessons;
        });
    });
  };

  $scope.getLessons = function(){
  	Lesson.getMyLessons(id, function(lessons){
  		$scope.lessons = lessons
  	})
  };


  $scope.callLesson = function(){
		$location.path('/lesson');
  }

	$scope.getLessons();

}]);
