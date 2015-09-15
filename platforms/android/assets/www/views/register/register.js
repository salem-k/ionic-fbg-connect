'Use Strict';
angular.module('App').controller('registerController', function ($scope, $state,$cordovaOauth, $location,$http) {

  $scope.login = function() {
    $cordovaOauth.facebook("904099126343805", ["email", "user_website", "user_location", "user_relationships"]).then(function(result) {
      $rootScope.access_token=result.access_token;
              //alert(JSON.stringify(result.access_token));

            $location.path("/home");
          }, function(error) {
              alert("There was a problem signing in!  See the console for logs");
              console.log(JSON.stringify(error));
          });
  };
});
