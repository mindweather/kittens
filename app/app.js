'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).

angular.module("myApp", ["firebase"]);

angular.module('myApp', ['firebase'])
.controller("MyCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {
    // Our controller definition goes here
  }
]);

angular.module('myApp')
.controller("MyCtrl", function($scope, $firebase) {
  // Firebase URL
  var URL = "https://nbs.firebase.com";
  // Synchronizing the items on our $scope
  $scope.items = $firebase(new Firebase(URL + '/items'));
});

$scope.items.hello = "baz";
$scope.items.$save("hello");  // new Firebase(URL + "/foo") now contains "baz".

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
