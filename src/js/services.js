angular.module('todoApp.services', [
]).service('todoService',[function() {
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
}]);
