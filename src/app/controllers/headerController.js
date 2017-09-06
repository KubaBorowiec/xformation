myApp.controller("headerController",["$scope","$location", function($scope,$location){
    {$scope.isActive=function($scope){return $scope === $location.path()}}
}]);