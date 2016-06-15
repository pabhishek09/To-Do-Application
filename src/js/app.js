angular.module('todoApp',[
	'ngRoute',
	'ui.bootstrap',
	'todoApp.controllers',
	'todoApp.services',
	'todoApp.directives',
	'todoAppConstants'
]).config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'src/views/home.html',
		controller: 'homeController'
	})

	.when('/today', {
		templateUrl: 'src/views/today.html'
	})

	.when('/all', {
		templateUrl: 'src/views/all.html',
		controller: 'allTodosController'
	})

	.when('/done', {
		templateUrl: 'src/views/done.html'
	});
});
