angular.module('calendarDemoApp', [])
.controller('calendarCtrl',['$scope',function($scope){
	$scope.dateRange = CalendarRange.prepareDate();
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