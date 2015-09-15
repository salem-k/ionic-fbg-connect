'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$rootScope,$location,$http) {

$scope.init = function(){

  $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $rootScope.access_token, fields: "id,name,gender,location,website,picture,relationship_status,email", format: "json" }}).then(function(result) {
   $scope.profil = result.data;
   alert(JSON.stringify($scope.profil));
}, function(error) {
   alert("There was a problem getting your profile.  Check the logs for details.");
   console.log(error);
});
 };
  $scope.logOut = function () {

      $location.path("/login");
  }

}
);
