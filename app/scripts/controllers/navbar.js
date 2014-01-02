'use strict';

angular.module('app')
.controller('NavbarCtrl', ['$scope', function ($scope) {

  $scope.user = false;
  // $scope.$watch($auth.getCurrentUser, function () {
  //     $scope.user = $auth.getCurrentUser() || false;
  // });

}]);
