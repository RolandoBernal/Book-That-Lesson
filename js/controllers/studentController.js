app.controller('StudentCtrl', ['$scope', function($scope){
	$scope.studentName='Jon Doe';
	$scope.lessons = [
		{
			lesson: {
							1: {
									date: '10/10/2015',
									description: 'driving',
									instructor: 'tiger woods'
								}
						 }
		}
	];


}]);


