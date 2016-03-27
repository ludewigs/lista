angular.module("listaTelefonica", ["ngRoute", "ngMessages", "serialGenerator", "ui"]);

angular.module("listaTelefonica").factory('nomeApp', function(){
	return {
		name: "Lista Telefônica"
	}
});
