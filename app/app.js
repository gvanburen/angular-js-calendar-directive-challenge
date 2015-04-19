angular.module('calendarDemoApp', [])
.controller('calendarCtrl',['$scope',function($scope){
	$scope.dateRange = CalendarRange.initialDate();
	var test = new Date($scope.dateRange.year, $scope.dateRange.month);
	$scope.days = CalendarRange.getMonthlyRange(test);
	console.log($scope.dateRange);
	console.log(test);
	console.log($scope.days);
}])
.directive('calendar', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'calendar.html',
		scope: true,
	}
});
// your controller and directive code go here