app.controller('MainCtrl', ['$scope', 'Auth', '$location', '$rootScope', function($scope, Auth, $location, $rootScope){

	// console.log("Main Controller.");

	$scope.showLogin = false;
	$scope.showRegister = false;
	$scope.showExpress = false;
	$scope.messageLogin = "Already registered?";
	$scope.messageLogin2 = "Login and manage your account.";
	$scope.messageRegister = "Tell us about yourself to get started...";
	$scope.messageExpress = "COMING SOON";
	$scope.messageExpress2 = "in v2.0";
	$scope.userName = "";


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

// console.log("Auth Controller in the MainCtrl");

	$scope.login = function() {
		console.log("You clicked the LOGIN button");
		Auth.login($scope.user.email, $scope.user.password, function() {
			$location.path('/user');
			$scope.$apply();
			console.log("$scope.user : ",$scope.user);
			console.log("$scope.user.name : ",$scope.user.name);
			$scope.userName();

		});
	};

	$scope.register = function() {
		console.log("You clicked the REGISTER button");
		Auth.register($scope.user.email, $scope.user.password, function() {
			console.log($rootScope.auth)
			var data = {name:$scope.user.name}
			console.log(data)
			Auth.addUserInfo($rootScope.auth.uid, data, function(){

				Auth.login($scope.user.email, $scope.user.password, function() {
					$location.path('/');
					$scope.$apply();
					console.log("$scope.user : ",$scope.user);
					console.log('before $scope.showLogin = true;');
					$scope.showLogin = true;
					console.log('after $scope.showLogin = true;');
					$scope.showRegister = false;
					$scope.showExpress = false;
				})
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

	$scope.userName = function (){
		Auth.getName($rootScope.auth.uid, function(user2){
			var objectUid = Object.keys(user2);
			var stuff = user2[objectUid];
			console.log('stuff', stuff.name);
			$rootScope.username = stuff.name;

		})
	}


}])


