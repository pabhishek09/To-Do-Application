angular.module('todoApp.controllers',[
]).controller('homeController', ['$scope', 'categoryList', 'todoService', '$timeout',
	function($scope, categoryList, todoService, $timeout) {
		$scope.categories = categoryList,
			$scope.todayTodos = todoService.getTodaysTodos(),
			$scope.dateValue = new Date();
		$scope.addTodo = function() {
			if ($scope.task.category === 'Select a category') {
				$scope.task.category = 'Others';
				$scope.task.icon = 'fa fa-reorder';
			}
			var todo = {category: $scope.task.category, icon: $scope.task.icon, description: $scope.task.description, date: $scope.dateValue, done: ''};
			todoService.addTodo(todo);
			$scope.todayTodos = todoService.getTodaysTodos();
			$scope.task.category = 'Select a category';
			$scope.dateValue = new Date();
			$scope.addMessage = 'todo added!';
			$timeout(function() {
				$scope.addMessage = '';
			}, 2000);
		};
		$scope.showCalender = function() {
			$scope.popup1.opened = true;
		};
		$scope.updateValue = function(todo) {
			todoService.updateTodo(todo);
			$scope.todayTodos = todoService.getTodaysTodos();
		};
	}
])
.controller('allTodosController', ['$scope', 'todoService', '$timeout',
	function($scope, todoService, $timeout) {
		$scope.allTodos = todoService.getallTodos();
		$scope.clearTodoList = function() {
			todoService.clearTodoList();
			$scope.allTodos = todoService.getallTodos();
			$scope.clearMessage = 'todo-list cleaned!';
			$timeout(function() {
				$scope.clearMessage = '';
			}, 2000);
		};
		$scope.updateValue = function(todo) {
			todoService.updateTodo(todo);
			$scope.allTodos = todoService.getallTodos();
		};
	}
])
.controller('doneTodosController', ['$scope', 'todoService',
	function($scope, todoService) {
		$scope.doneTodos = todoService.getDoneTodos();
		$scope.clearDoneList = function() {
			todoService.clearDoneList();
			$scope.doneTodos = todoService.getDoneTodos();
		};
	}
]);
