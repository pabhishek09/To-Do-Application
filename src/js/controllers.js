angular.module('todoApp.controllers',[
]).controller('homeController', ['$scope', 'categoryList', 'todoFactory',
	function($scope, categoryList, todoFactory) {
		$scope.categories = categoryList;
		$scope.addTodo = function() {
			todoFactory.addTodo($scope.task);
		}
	}
])
.controller('allTodosController', ['$scope', 'todoFactory',
	function($scope, todoFactory) {
		$scope.allTodos = todoFactory.getallTodos();
	}]);
