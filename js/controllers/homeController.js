app.controller('HomeCtrl', function($scope){
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

})
