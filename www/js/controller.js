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

.controller('Pracas', function($scope,$http,PracasFactory) {
	PracasFactory.success(function(data){
		$scope.pracas = data;
	});
	// $http.get('js/pracas.json').success(function(data){
 //            $scope.pracas = data;
 //    });
})

.controller('PracaDetail', function($scope, $stateParams,PracasFactory,$ionicPopup) {
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

.controller("Search",function($scope,$stateParams){
	$scope.filtro = "";
	$scope.data = [
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
	},
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
	}
	];
})