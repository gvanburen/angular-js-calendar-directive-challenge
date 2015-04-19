angular.module('calendarDemoApp', [])
.controller('calendarCtrl',['$scope',function($scope){
	$scope.dateRange = CalendarRange.initialDate();
	$scope.form = {
		month: $scope.dateRange.month + 1,
		year: $scope.dateRange.year
	};
	//console.log($scope.dateRange);
}])
.directive('calendar', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'calendar.html',
		scope: true,
		controller: function($rootScope, $scope){
			$scope.$watchCollection('[form.year,form.month]', function(newValue, oldValue){
				var selectedDates = new Date(newValue);
				//console.log(selectedDates);
				var range = CalendarRange.getMonthlyRange(selectedDates);
				$rootScope.weekly = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				$rootScope.days = range;
				console.log($rootScope);
			})
		}
	}
});
// your controller and directive code go here