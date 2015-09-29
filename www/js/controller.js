angular.module('Controllers', [])

.controller('AppCtrl', ['$scope','$ionicFilterBar',function($scope,$ionicFilterBar) {
	 
}])

.controller('Map', function($scope, $ionicLoading) {
        $scope.init = function(){
            var myLatlng = new google.maps.LatLng(37.3000, -120.4833);/**/
         
            var mapOptions = {
	            center: myLatlng,
	            zoom: 16,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
            };
         
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
         
            navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location"
            });
        });
         
        $scope.map = map;
    	console.log($scope.map);
	}
})

.controller('Pracas', function($scope,PracasFactory,$ionicPopup,$state) {
	$scope.filtro ={};
	$scope.search = {search: '',typesearch: ''}
	PracasFactory.success(function(data){
		$scope.pracas = data;
	});
	$scope.searchOption = function(){
		$ionicPopup.show({
            title:"Opçoes de busca" ,
            template:'<div class="radios"><ion-radio ng-model="search.typesearch" ng-value="' + "'Pracas'"+'">Por praca</ion-radio><ion-radio ng-model="search.typesearch" ng-value="'+"'Trucks'"+'">Por truck</ion-radio></div>',
                // templateUrl: '/pages/selectData.html',
            scope: $scope,
            buttons:[
            {'text':'Ok',
            onTap : function(e){
            	$scope.search.search=null;
            	$state.go('search',{typesearch:$scope.search.typesearch,term:$scope.search.search});
            }},
            {'text':'Cancel'}
            
            ]
        });
	}
	
})

.controller('PracaDetail', function($scope, $stateParams,PracasFactory,$ionicPopup,$ionicScrollDelegate) {
	var a = $ionicScrollDelegate.scrollTop();
	console.log(a);
	var id = $stateParams.id;
	PracasFactory.success(function(data){
		$scope.praca = data[id-1];
	});

	$scope.popupEventos = function(){
		$ionicPopup.show({
                title:"Eventos",
                template:'<ion-list><a class="item">Bossa & Fest Jazz</a><a class="item">Festival DoSol</a></ion-list>',
                // templateUrl: '/pages/selectData.html',
                scope: $scope,
                buttons:[
                {'text':'Ok'}
                ]
                }).then(function(){

                });
	}
})

.controller("Search",function($scope,$stateParams,$filter){
	$scope.search = $stateParams.term;
	$scope.typesearch = $stateParams.typesearch;
	console.log($scope.typesearch ,$scope.search);
	
	$scope.pracas = [
	{
		"tipo":"Praca",
		"nome":" Mestre Francisco Valentini",
		"id":4,
		"localidade":{
			"logradouro":"Avenida Amintas Barros ",
			"numero":"78",
			"bairro":"Petrópolis"
		}
	},
	{
		"tipo":"Praca",
		"nome":" Luís Raimundo de Sousa",
		"id":3,
		"localidade":{
			"logradouro":"Avenia Ayrton Sena",
			"numero":"156",
			"bairro":"Nova Parnamirim"
		},
	},
	{	
		"tipo":"Praca",
		"nome":" Aristófanes Fernandes",
		"id":2,
		"localidade":{
			"logradouro":"Avenida Praia da Pipa",
			"numero":"66",
			"bairro":"Ponta Negra"
		},
	},
	{
		"tipo":"Praca",
		"nome":" Augusto Leite",
		"id":1,
		"localidade":{
			"logradouro":"Rua das Mangueiras",
			"numero":"6",
			"bairro":"Nova Natal"
		},
	}]
	$scope.trucks =[
	{	
		"tipo":"Truck",
		"id":3,
		"nome":"Molti",
		"localidade":{
			"logradouro":"Rua das Mangueiras",
			"numero":"6",
			"bairro":"Nova Natal"
		}
	},
	{
		"tipo":"Truck",
		"id":2,
		"nome":"Burg Marx",
		"localidade":{
			"logradouro":"Rua das Mangueiras",
			"numero":"6",
			"bairro":"Nova Natal"
		}
	},
	{
		"tipo":"Truck",
		"id":3,
		"nome":"Falmois",
		"localidade":{
			"logradouro":"Rua das Mangueiras",
			"numero":"6",
			"bairro":"Nova Natal"
		}
	},
	{
		"tipo":"Truck",
		"id":3,
		"nome":"Mazzola",
		"localidade":{
			"logradouro":"Rua das Mangueiras",
			"numero":"6",
			"bairro":"Nova Natal"
		},
	}];
	var objarray = $scope.typesearch=="Pracas" ? $scope.pracas : $scope.trucks;
	$scope.result = $filter('filter')(objarray, $scope.search);
	if($scope.result.length) $scope.zero = false;
	else{ $scope.zero = true;}
	
})