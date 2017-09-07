myApp.factory('ajaxFromOutter',['$http','$sce', function($http,$sce) {
    return{
        getData : function(urlSource) {    
            var trustUrl = $sce.trustAsResourceUrl(urlSource);
            return $http.jsonp(trustUrl, {jsonpCallbackParam: 'callback'})
        }
     }
}]);
