
var myyoprojectApp = angular.module('myyoprojectApp', [
  'ngRoute',
  'myyoprojectCtrls',
  'myyoprojectServices'
]);

myyoprojectApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/',{
      	templateUrl : 'partials/home.html',
      	controller : 'homeController'
      }).
      when('/edit', {
      	templateUrl : 'partials/edit.html',
      	controller : 'editController'	
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutController'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
      }).
      when('/registration',{
      	templateUrl: 'partials/registration.html',
      	controller: 'registrationController'
      }).
      when('/favorites',{
        templateUrl: 'partials/favorites.html',
        controller: 'favoritesController'
      }).
      when('/listview',{
        templateUrl: 'partials/listview.html',
        controller: 'listviewController'
      }).
       when('/listview/:communistName',{
         templateUrl: 'partials/profileview.html',
         controller: 'profileviewController'
       });
  }]);