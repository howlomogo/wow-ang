var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/profile.html', // Home Page
        controller: 'MainCtrl'
      }).
      when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'MainCtrl'
      }).
      when('/deckbuilder', {
        templateUrl: 'views/deckbuilder.html',
        controller: 'DeckBuilderCtrl'
      }).
      otherwise({
        redirectTo: '/404',
        templateUrl: 'views/404.html',
        controller: 'MainCtrl'
      });
  }]);

app.controller('MainCtrl', function($scope) {
  // Store fb user details in controller scope
  $scope.facebookUser = {
    firstName: "",
    lastName: "",
    picture: ""
  };
});