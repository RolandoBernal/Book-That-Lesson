app.factory('wu', ['$http', function($http){

	function getUrl(service, zip){
		return 'http://api.wunderground.com/api/3c5d75adcec2ff39/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK'

	}


	function getConditions(zip){
		var url = getUrl('conditions', zip)
		return $http.jsonp(url);

	}


	return{getConditions:getConditions}

}])
