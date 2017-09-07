myApp.factory('ajaxFromServer',['$http', function($http) {
    return{
        getData : function(urlSource) {
            console.log(urlSource);
            return $http({
                url: urlSource,
                method: 'GET',
                cache: true
            })
        }
     }
}]);