angular.module('todoApp.services', [
]).service('todoService',['$filter', function($filter) {
	var sessionTodoList = [];
		if (localStorage.getItem('todoList')) {
			var previousTodos = JSON.parse(localStorage.getItem('todoList'));
		for (var todo in previousTodos) {
			sessionTodoList.push(previousTodos[todo]);
		}
	}

	this.addTodo = function(task) {
		sessionTodoList.push(task);
		updatelocalStorage();
	};

	this.clearDoneList = function() {
		angular.forEach(sessionTodoList, function(todo) {
			if (todo.done) {
				
			}
		});
		updatelocalStorage();
	};

	this.clearTodoList = function() {
		localStorage.removeItem('todoList');
		sessionTodoList = [];
		updatelocalStorage();
	};

	this.getallTodos = function () {
		return sessionTodoList;
	};

	this.updateTodo = function(todo) {
		updatelocalStorage();
	};

	this.getTodaysTodos = function() {
		var todaysTodos = [];
		angular.forEach(sessionTodoList, function(todo) {
			if ($filter('date')(todo.date, "dd/MM/yyyy") === $filter('date')(new Date(), "dd/MM/yyyy")) {
				todaysTodos.push(todo);
			}
		});
		return todaysTodos;
	};

	this.getDoneTodos = function() {
		var doneTodos = [];
		angular.forEach(sessionTodoList, function(todo) {
			if (todo.done) {
				doneTodos.push(todo);
			}
		});
		return doneTodos;
	};

	updatelocalStorage = function() {
		localStorage.setItem('todoList', JSON.stringify(sessionTodoList));
	};
}]);
