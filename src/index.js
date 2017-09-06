var angular = require('angular');
var sanitize = require('angular-sanitize');
var route = require('angular-route');
var myApp = angular.module('XformationApp',['ngSanitize','ngRoute']);
require('./app/router.js');
require('./app/controllers/headerController.js');
require('./app/controllers/repositoriesController.js');
require('./app/controllers/contributorsContorller.js');
require('./app/services/ajaxFromServer.js');
require('./app/services/ajaxFromOutter.js');






