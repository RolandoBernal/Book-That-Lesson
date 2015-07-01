app.factory('Auth', ['$rootScope', '$location', 'API_URL', '$http', function($rootScope, $location, API_URL, $http) {

    console.log("Auth Controller in Auth Factory. ");

    var fb = new Firebase(API_URL);

   function login(email, password, cb) {
      fb.authWithPassword({
        email: email,
        password: password
      }, function(err, authData) {
        if(err) {
          console.log(err);
          alert("Something went wrong. Either the email does not exist or the password is incorrect. Please verify your information.");
        } else {
          $rootScope.auth = authData;
          cb();
          console.log(authData);
        }
      });
    }
    function register(email, password, cb) {
      fb.createUser({
        email: email,
        password: password
      }, function(err, authData) {
        if(err) {
          console.log(err)
        } else {
          $rootScope.auth = authData;
          cb();
          alert("You have registered successfully. Now go login.")
        }
      })
    }


    function logout(cb) {
      fb.unauth(function() {
        $rootScope.auth = null;
        cb();
      })
    }

    function addUserInfo(simpleLogin, data, cb) {
      console.log('hit profile factory')
      $http
        .post(`${API_URL}/profile/${simpleLogin}.json`, data)
        .success(cb);
    }

    function getName(simpleLogin, cb) {
      console.log('hit username function')
      $http
        .get(`${API_URL}/profile/${simpleLogin}.json`)
        .success(cb);
    }

    function getAuth() {
      return fb.getAuth();
    }
  return {login:login, register:register, logout:logout, getAuth:getAuth, addUserInfo:addUserInfo, getName:getName};
  }]);
