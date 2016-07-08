var app = angular.module('x-admin2', []).
app.controller('x-controller', function ($scope, $http，$window) {
  $scope.currentUser="Kobe";
  $scope.content = '/welcome.html';
  $scope.menus = [];

    $http.get('/adminMenu')
         .success(function(data, status, headers, config){
           console.log(data);
           $scope.menus = data;
         })
         .error(function(data, status, headers, config){
            $window.alert("error - " + status);
         });

  $scope.setContent = function(action){
    console.log(action);
    $scope.content=action;
  }
});