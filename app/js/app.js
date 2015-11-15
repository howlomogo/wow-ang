var app = angular.module('myApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'MainCtrl' // Dont need these
      }).
      when('/deckbuilder', {
        templateUrl: 'views/deckbuilder.html',
        controller: 'DeckBuilderCtrl'
      }).
      when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
      }).
      otherwise({
        redirectTo: '/404',
        templateUrl: 'views/404.html',
        controller: 'MainCtrl'
      });
  }]);

app.controller('MainCtrl', function($scope) {
  
});

app.controller('CardsCtrl', function($scope, $http){
  // Get card json data
  $scope.jsondata =  $http.get("../json/cards.json")
    .success(function(response) {
      $scope.cards = response;
    });
});

app.controller('DeckBuilderCtrl', function($scope){
  console.log("On the deck builder page");
});