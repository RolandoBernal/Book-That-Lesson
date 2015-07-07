app.controller('UserCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location, $http){
	$scope.userName= "Levi";


	// $scope.logout=function(){
	// 	console.log("You clicked the LOGOUT button");
	// 	Auth.logout(function() {
	// 		$location.path('/');
	// 		$scope.$apply();
	// 	});
	// };


}]);


