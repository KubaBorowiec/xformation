myApp.controller('contributorsContorller',['$scope', '$http','ajaxFromServer', function($scope,$http,ajaxFromServer) {
    $scope.loading = true;
    $scope.titles= ['nickname','team','contributions'];
    // create the list of contributors
    ajaxFromServer.getData('data/contributors.json').then(function(data){
       $scope.loading = false;
       $scope.posts = data.data;
    });
}]);