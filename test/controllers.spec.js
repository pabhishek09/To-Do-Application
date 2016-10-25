describe('Todo app controllers', function() {
	
	var homeController,
		allTodosController,
		todayTodosController,
		categoryList,
		todoService,
		$controller,
		$scope,
		todoList = [
			{
				description: 'buy milk',
				category: 'grocery'
			}];

	beforeEach(function() {
		module('todoApp.controllers', 'todoApp.services', 'todoAppConstants');

		inject(function(_$controller_,_todoService_,_categoryList_, $rootScope){
			$controller = _$controller_;
			todoService = _todoService_;
			categoryList= _categoryList_;
			$scope = $rootScope.$new();
		})
	});

	describe('Home controller', function() {
		beforeEach(function() {
			homeController = $controller('homeController', {$scope: $scope});
		});
		it ('should have all the types of categories defined', function() {
			expect($scope.categories).toEqual(categoryList);
		});
	});

	describe('All todos controller', function() {
		beforeEach(function() {
			allTodosController = $controller('allTodosController', {$scope: $scope});
			spyOn(todoService,'getallTodos').and.returnValue(todoList);
			$scope.$apply();
		});

		it ('should have a list of all todos', function() {
			//expect($scope.allTodos).toBe(todoList);
		});
	});
});
