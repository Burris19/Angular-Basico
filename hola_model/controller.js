angular = angular.module("MyFirstApp",[])

	angular.controller("FirstController", function($scope){
		$scope.nombre = "Julian";
		$scope.nuevoComentario = {};
		$scope.comentarios = [
			{
				comentario: "Buen tutorial",
				username: "CodigoFacilito"
			},
			{
				comentario: "Malisimo el tutorial",
				username: "Otro Usuario"
			}

		];
		$scope.agregarComentario = function(){
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		};
	});