'Use Strict';
angular.module('App').controller('registerController', function ($scope, $state,$cordovaOauth, $location) {

  $scope.login = function() {
    $cordovaOauth.facebook("904099126343805", ["email"]).then(function(result) {
alert(resut);
              $location.path("/home");
          }, function(error) {
              alert("There was a problem signing in!  See the console for logs");
              console.log(JSON.stringify(error));
          });
  };
});
