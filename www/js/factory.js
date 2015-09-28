angular.module('Factory',['ngResource'])

.factory('PracasFactory',['$http',
  function($http){
    return $http.get('js/pracas.json');
}]);