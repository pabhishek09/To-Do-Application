angular.module('todoApp.services', [
]).service('todoService',['$filter', function($filter) {
	var sessionTodoList = new Array();
		if (localStorage['todoList']) {
			var previousTodos = JSON.parse(localStorage['todoList']);
		for (todo in previousTodos) {
			sessionTodoList.push(previousTodos[todo]);
		}
	}

	this.addTodo = function(task) {
		sessionTodoList.push(task);
		localStorage.removeItem('todoList');
		localStorage.setItem('todoList', JSON.stringify(sessionTodoList));
	}

	this.getallTodos = function () {
		return sessionTodoList;
	}

	this.getTodaysTodos = function() {
		var todaysTodos = [];
		angular.forEach(sessionTodoList, function(todo) {
			if ($filter('date')(todo.date, "dd/MM/yyyy") === $filter('date')(new Date(), "dd/MM/yyyy")) {
				todaysTodos.push(todo);
			}
		});
		return todaysTodos;
	}
}]);
