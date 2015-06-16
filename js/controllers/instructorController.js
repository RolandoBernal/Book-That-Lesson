app.controller('ConditionsCtrl', ['$scope', 'wu', function($scope, wu){
  $scope.zip='';
  $scope.title='Current Conditions';
  $scope.getConditions=function(){
    wu.getConditions($scope.zip).then(function(response){
      console.log(response.data);
      $scope.temp = response.data.current_observation.temp_f;
    })
  }
}]);
