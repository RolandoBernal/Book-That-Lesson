app.controller('LessonCtrl', ['$rootScope', '$scope', '$location', 'Lesson', function($rootScope, $scope, $location, Lesson){
  var id = $rootScope.auth.uid.replace(':', '%3A');
  $scope.addLesson = function () {
    Lesson.addLesson(id, $scope.newLesson, function () {
      console.log('Lesson Created!!!')
      $scope.newLesson = {};
        Lesson.getMyLessons(id, function (lessons) {
          $scope.lessons = lessons;
        });
        $location.path('/user');
    });
  };

  $scope.getLessons = function(){
  	Lesson.getMyLessons(id, function(lessons){
  		$scope.lessons = lessons
  		$scope.keys = Object.keys(lessons);
  	})
  };


  $scope.callLesson = function(){
		$location.path('/lesson');
  }

  $scope.deleteALesson = function(lessonId){
  	Lesson.deleteLesson(id, lessonId, function(){
  		console.log('its Gone');
  		Lesson.getMyLessons(id, function(lessons){
  			$scope.lessons = lessons
  			$scope.keys = Object.keys(lessons);
  		})
  	})
  }

	$scope.getLessons();

}]);
