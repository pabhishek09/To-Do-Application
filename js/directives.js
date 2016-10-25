angular.module('todoApp.directives',[
]).directive('datePicker',function() {
	return {
        restrict: 'E',
        scope: {
        	dateValue: '='
        },
        templateUrl: 'views/datepicker.html',
        controller: ['$scope', function ($scope) {
    		$scope.today = function() {
    			$scope.dateValue = new Date();
  			};
 			$scope.today();

  			$scope.inlineOptions = {
    			customClass: getDayClass,
    			minDate: new Date(),
    			showWeeks: false
  			};

  			$scope.dateOptions = {
    			dateDisabled: disabled,
    			formatYear: 'yy',
    			maxDate: new Date(2020, 5, 22),
    			minDate: new Date(),
    			startingDay: 1
			};

  			// Disable weekend selection
  			function disabled(data) {
    			var date = data.date,
      			mode = data.mode;
    			return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  			}

  			$scope.toggleMin = function() {
    			$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    			$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  			};

  			$scope.toggleMin();


  			$scope.open2 = function() {
    			$scope.popup2.opened = true;
  			};

  			$scope.setDate = function(year, month, day) {
    			$scope.dateValue = new Date(year, month, day);
  			};



  			$scope.popup2 = {
    			opened: false
  			};

  			function getDayClass(data) {
    			var date = data.date,
      			mode = data.mode;
    			if (mode === 'day') {
      				var dayToCheck = new Date(date).setHours(0,0,0,0);

      				for (var i = 0; i < $scope.events.length; i++) {
        				var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        			if (dayToCheck === currentDay) {
	          				return $scope.events[i].status;
	        			}
      				}
    			}

    			return '';
  			}
        }]
    };
});
