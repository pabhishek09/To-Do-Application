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
		updatelocalStorage();
	}

	this.clearDoneList = function() {
		angular.forEach(sessionTodoList, function(todo) {
			if (todo.done) {
				
			}
		});
		updatelocalStorage();
	}

	this.clearTodoList = function() {
		localStorage.removeItem('todoList');
		sessionTodoList = new Array();
		updatelocalStorage();
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

	this.getDoneTodos = function() {
		var doneTodos = [],
			changed;
		angular.forEach(sessionTodoList, function(todo) {
			if (todo.done) {
				changed = true;
				doneTodos.push(todo);
			}
		});

		if(changed) {
			console.log('**');
			localStorage.setItem('todoList', JSON.stringify(sessionTodoList));
		}
		return doneTodos;
	}

	updatelocalStorage = function() {
		localStorage.setItem('todoList', JSON.stringify(sessionTodoList));
	}
}]);
