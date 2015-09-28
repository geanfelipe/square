// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','Controllers','jett.ionic.filter.bar','Factory'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search/:term",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html",
          controller: "Search"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.pracas', {
      url: "/pracas",
      views: {
        'menuContent' :{
          templateUrl: "templates/pracas.html",
          controller: 'Pracas'
        }
      }
    })

    .state('app.praca', {
      url: "/praca/:id",
      views: {
        'menuContent' :{
          templateUrl:"templates/praca.html",
          controller: 'PracaDetail'
        }
      }
    })

    .state('app.map', {
      url: "/map/",
      views: {
        'menuContent' :{
          templateUrl:"templates/map.html",
          controller: 'Map'
        }
      }
    })


    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/pracas');
});
