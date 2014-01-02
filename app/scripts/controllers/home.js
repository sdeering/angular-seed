'use strict';

angular.module('app')
.controller('HomeCtrl', ['$scope', function ($scope) {

  // servers
  $scope.features = [
    'Development Live Reload',
    'Unit Testing',
    'E2E Testing',
    'Code Coverage Reports',
    'Bootstrap 3',
    'COMPASS',
    'API Documentation',
    'Production Preview'
  ];

}]);
