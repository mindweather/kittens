'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['firebase', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('list', {
				url: '/',
				controller: 'ListController',
				templateUrl: 'views/list.html'
			})
			.state('person', {
				url: '/{username}',
				controller: 'PersonController',
				templateUrl: 'views/person.html'
			});

		$urlRouterProvider.otherwise('/');
	})
	.controller('ListController', function($scope, $firebase) {
		var fire = $firebase(new Firebase('https://nbs.firebaseio.com/'));

		$scope.people = fire.$asArray();
	})
	.controller('PersonController', function($scope, $firebase, $stateParams) {
		var fire = $firebase(new Firebase('https://nbs.firebaseio.com/'));
		var people = fire.$asArray();

		people.$loaded().then(function(people) {
			$scope.person = _(people).find({ username: $stateParams.username });
		});
	});
