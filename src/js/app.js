angular.module('todoApp',[
	'ngRoute',
	'todoApp.controllers'
]).config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'src/views/home.html' 
	})

	.when('/today', {
		templateUrl: 'src/views/today.html'
	})

	.when('/all', {
		templateUrl: 'src/views/all.html'
	})

	.when('/done', {
		templateUrl: 'src/views/done.html'
	});
});
