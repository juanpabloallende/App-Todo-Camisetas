
Vue.component('categorias-home',{
	props:['id', 'imagen', 'alt', 'titulo'],
	template: `
			  <div v-bind:id="id"class="col-6 mb-3">
				<div class="card"	
					<img class="card-img-top" v-bind:src="imagen" v-bind:alt="alt"/>
					<div class="card-body">
						<h3 class="card-title text-center">{{titulo}}</h3>
					</div>
			  </div>
			  `,
});
Vue.component('titulo-categorias', {

template:'<h2 class="text-center">Categorías</h2>'

});	


var formu= new Vue({
	el: "#form",
	data: {
			nombre:"",
			mail:"",
			comentario:"",
			edad:"",
	},
	methods: {
			enviar:function() {
				if (localStorage.getItem("consulta")){
					var array_para_data = [];
				}else{
					array_para_data = JSON.parse(localStorage.agenda);
				}
				var nombre=document.querySelector("#nombre").value;
				var mail=document.querySelector("#mail").value;
				var comentario=document.querySelector("#comentario").value;
				var edad=document.querySelector("#edad").value;
			
				data = { nombre: nombre, mail: mail, comentario : comentario, edad: edad }

				array_para_data.push(data);
	
				localStorage.setItem("consulta", JSON.stringify(array_para_data));	
	
				console.log(array_para_data);	
 	}
}
})

var app= new Vue({
	el: "#menu",
	data: {
		categorias: [
					{	id:"argentina",
						imagen:"img/camiseta_arg.png",
						alt:"camiseta de argentina",
						titulo:"Selección Argentina",
					},
					{	id:"retro",
						imagen:"img/camiseta_retro.png",
						alt:"camiseta de argentina retro",
						titulo:"Camisetas Retro",
					},
					{	id:"madrid",	
						imagen:"img/camiseta_real_madrid.png",
						alt:"camiseta de Real Madrid",
						titulo:"Futbol Europeo",
					},
					{	id:"river",
						imagen:"img/camiseta_river.png",
						alt:"camiseta de river",
						titulo:"Futbol Argentino",
					}
					]
		}
});

var autor= new Vue({
	el: "#autor",
	data: {
		nombre:"Nombre: Juan Pablo Allende",	
		img:"img/foto_mia.png",
		alt:"foto del autor",
		datosautor:[
			"Carrera: Diseño y Desarrollo Web",
			"Materia: Aplicaciones para Dispositivos Móviles",
			"Año y Comisión: 3°A turno mañana",
			"Docente: Mabel García",
		]	
	}	
})

	