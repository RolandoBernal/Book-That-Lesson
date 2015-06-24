app.controller('MainCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location, $http){

	console.log("Main Controller.");

	$scope.showLogin = false;
	$scope.showRegister = false;
	$scope.showExpress = false;
	$scope.messageLogin = "Already registered?";
	$scope.messageLogin2 = "Login and manage your account.";
	$scope.messageRegister = "Tell us about yourself to get started...";
	$scope.messageExpress = "COMING SOON";
	$scope.messageExpress2 = "in v2.0";


	$scope.displayLogin = function(){
		$scope.showLogin = true;
		$scope.showRegister = false;
		$scope.showExpress = false;
	}

	$scope.displayRegister = function(){
		$scope.showLogin = false;
		$scope.showRegister = true;
		$scope.showExpress = false;
	}

	$scope.displayExpress = function(){
		$scope.showLogin = false;
		$scope.showRegister = false;
		$scope.showExpress = true;
	}

console.log("Auth Controller in the MainCtrl");

	$scope.login = function() {
		console.log("You clicked the LOGIN button");
		Auth.login($scope.user.email, $scope.user.password, function() {
			$location.path('/user');
			$scope.$apply();
		});
	};

	$scope.register = function() {
		console.log("You clicked the REGISTER button");
		Auth.register($scope.user.email, $scope.user.password, function() {
			Auth.login($scope.user.email, $scope.user.password, function() {
				$location.path('/');
				$scope.$apply();
				console.log('before $scope.showLogin = true;');
				$scope.showLogin = true;
				console.log('after $scope.showLogin = true;');
				$scope.showRegister = false;
				$scope.showExpress = false;
			});
		});
	};

	$scope.logout=function(){
		console.log("You clicked the LOGOUT button");
		Auth.logout(function() {
			$location.path('/');
			$scope.$apply();
		});
	};


}])


