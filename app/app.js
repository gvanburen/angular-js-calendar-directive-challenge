angular.module('calendarDemoApp', [])
.controller('calendarCtrl',['$scope',function($scope){
	$scope.dateRange = CalendarRange.getMonthlyRange(new Date());
	console.log($scope.dateRange);
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