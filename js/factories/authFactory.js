app.factory('Auth', ['$rootScope', '$location', 'API_URL', function($rootScope, $location, API_URL) {

    console.log("Auth Controller in Auth Factory. ");

    var fb = new Firebase(API_URL);

   function login(email, password, cb) {
      fb.authWithPassword({
        email: email,
        password: password
      }, function(err, authData) {
        if(err) {
          console.log(err);
        } else {
          $rootScope.auth = authData;
          cb();
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
        }
      })
    }
    function logout(cb) {
      fb.unauth(function() {
        $rootScope.auth = null;
        cb();
      })
    }
    function getAuth() {
      return fb.getAuth();
    }
  return {login:login, register:register, logout:logout, getAuth:getAuth};
  }]);
