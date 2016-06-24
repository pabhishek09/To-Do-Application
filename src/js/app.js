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
			templateUrl: 'src/views/home.html',
			controller: 'homeController'
		})

		.when('/today', {
			templateUrl: 'src/views/today.html',
			controller: 'todayTodosController'
		})

		.when('/all', {
			templateUrl: 'src/views/all.html',
			controller: 'allTodosController'
		})

		.when('/done', {
			templateUrl: 'src/views/done.html',
			controller: 'doneTodosController'
		});
	}
]);
