myApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.when("/contributors",{controller:"contributorsContorller",templateUrl:"templates/contributors.html"}),
        $routeProvider.when("/repositories", {controller:"repositoriesController",templateUrl:"templates/repositories.html"}),
        $routeProvider.otherwise({redirectTo:"/"})}]);