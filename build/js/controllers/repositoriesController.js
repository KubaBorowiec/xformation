myApp.controller('repositoriesController',['$scope', '$http','$sce','ajaxFromOutter', function($scope,$http, $sce, ajaxFromOutter) {
    $scope.buttons = ['name','stargazers_count','forks_count'];
    $scope.sort   = 'forks_count';// set the default search term
    $scope.sortReverse = true;//set descending order
    $scope.loading = true;
    //get an actual sorting term on click the button
    $scope.select = function(index) {
        $scope.sort   = $scope.buttons[index];
        $scope.sortReverse = !$scope.sortReverse;
    };
    ajaxFromOutter.getData('https://api.github.com/users/x-formation/repos').then(function(response){
            $scope.loading = false;
            $scope.repositories = response.data.data;
    });
}]);