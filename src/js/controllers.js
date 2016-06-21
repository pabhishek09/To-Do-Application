angular.module('todoApp.controllers',[
]).controller('homeController', ['$scope', 'categoryList', 'todoService',
	function($scope, categoryList, todoService) {
		$scope.categories = categoryList,
			$scope.dateValue = new Date();
		$scope.addTodo = function() {
			if ($scope.task.category === 'Select a category') {
				$scope.task.category = 'Others';
				$scope.task.icon = 'fa fa-reorder';
			}
			var todo = {category: $scope.task.category, icon: $scope.task.icon, description: $scope.task.description, date: $scope.dateValue, done: ''};
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
])
.controller('doneTodosController', ['$scope', 'todoService',
	function($scope, todoService) {
		$scope.doneTodos = todoService.getDoneTodos();
	}
]);
