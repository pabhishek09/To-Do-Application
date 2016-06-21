angular.module('todoApp.controllers',[
]).controller('homeController', ['$scope', 'categoryList', 'todoService',
	function($scope, categoryList, todoService) {
		$scope.categories = categoryList,
			$scope.dateValue = new Date();
		$scope.addTodo = function() {
			var todo = {category: $scope.task.category, description: $scope.task.description, date: $scope.dateValue};
			todoService.addTodo(todo);
		}
		$scope.showCalender = function() {
			$scope.popup1.opened = true;
		}
	}
])
.controller('allTodosController', ['$scope', 'todoService',
	function($scope, todoService) {
		$scope.allTodos = todoService.getallTodos();
	}
])
.controller('todayTodosController', ['$scope', 'todoService',
	function($scope, todoService) {
		$scope.todayTodos = todoService.getTodaysTodos();
	}
]);
