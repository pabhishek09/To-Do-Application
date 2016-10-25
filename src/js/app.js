angular.module('todoApp',[
	'ngRoute',
	'ui.bootstrap',
	'todoApp.controllers',
	'todoApp.services',
	'todoApp.directives',
	'todoAppConstants'
]).config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider

		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})

		.when('/all', {
			templateUrl: 'views/all.html',
			controller: 'allTodosController'
		})

		.when('/done', {
			templateUrl: 'views/done.html',
			controller: 'doneTodosController'
		});
	}
]);
