app.controller('AuthCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth){

	console.log("Auth Controller.");

	$scope.login = function() {
		Auth.login($scope.user.email, $scope.user.password, function() {
			$location.path('/user');
			$scope.$apply();
		});
	};

	$scope.register = function() {
		Auth.register($scope.user.email, $scope.user.password, function() {
			Auth.login($scope.user.email, $scope.user.password, function() {
				$location.path('/home');
				$scope.$apply();
			});
		});
	};

	$scope.logout=function(){
		Auth.logout(function() {
			$location.path('/home');
			$scope.$apply();
		});
	};
}]);
