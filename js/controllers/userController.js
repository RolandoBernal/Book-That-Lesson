app.controller('UserCtrl', ['$scope', function($scope){
	$scope.userName='Jon Doe';
	$scope.lessons = [
		{
			lesson: {
									date: '10/10/2015',
									description: 'driving',
									instructor: 'tiger woods'
							}
		}
	];


}]);


