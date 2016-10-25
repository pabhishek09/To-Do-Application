describe('todoservices', function(){
	'use strict';

	var todoService,
		$rootScope,
		$filter,
		todo = {
				description: 'buy milk',
				category: 'grocery'
			},
		sessionTodoList = [
			{
				description: 'buy milk',
				category: 'grocery'
			}];

	beforeEach(function() {
		module('todoApp.services');

		inject(function(_todoService_) {
			todoService = _todoService_;
		})
	});

	it('should return all the added todos', function() {
		todoService.addTodo(todo);
		expect(todoService.getallTodos()).toEqual(sessionTodoList);
	});

	it ('should return todays todos correctly', function(){
		var newTodo = {
			description: 'buy milk',
			category: 'grocery',
			date: new Date()
		};
		todoService.addTodo(newTodo);
		expect(todoService.getTodaysTodos()).toContain(newTodo);
	});

});
