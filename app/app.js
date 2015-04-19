angular.module('calendarDemoApp', [])
.controller('calendarCtrl',['$scope',function($scope){
	$scope.showDate = CalendarRange.currentDate();
	console.log($scope.showDate);
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