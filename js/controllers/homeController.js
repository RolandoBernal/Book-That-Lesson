app.controller('HomeCtrl', function($scope){
	$scope.showLogin = false;
	$scope.showRegister = false;
	$scope.showExpress = false;
	$scope.messageLogin = "This is the LOGIN page";
	$scope.messageRegister = "This is the REGISTER page";
	$scope.messageExpress = "COMING SOON";


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
