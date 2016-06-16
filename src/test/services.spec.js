describe('todoservices', function(){
	'use strict';

	var todoService,
		$rootScope,
		$filter,
		todo = {
			description: 'buy milk',
			category: 'grocery'
		};

	beforeEach(function() {
		module('todoApp.services');

		inject(function(_todoService_, _$filter_) {
			todoService = _todoService_;
			$filter = _$filter_;
		})
	});

	it('should add todos', function() {
		todoService.addTodo(todo);
		expect(sessionTodoList.length).toBe(1);
	});

});
