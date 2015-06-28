app.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://book-that-lesson.firebaseio.com/");
  return $firebaseAuth(ref);

});

//firebase Auth
app.controller("MainCtrl", function($scope, Auth) {
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    console.log(authData);

  });

  //login with Facebook
  $scope.login = function() {
    Auth.$authWithOAuthPopup("facebook").catch(function(error) {
      console.error(error);
    });

  }

  // logout
  $scope.logout = function() {
    Auth.$unauth();
  }

// ...

// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
var isNewUser = true;

var ref = new Firebase("https://book-that-lesson.firebaseio.com/");
  ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into Firebase so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});

// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'twitter':
       return authData.twitter.displayName;
     case 'facebook':
       return authData.facebook.displayName;
  }
}
});
