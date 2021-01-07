/*
Allende Juan Pablo, DW2MA 2019
*/
"use strict";
//Declaración de variables
const _c = console.log, d = document;
let aProductos = [], aCarrito = [];
//Armo el listado con los datos de los productos en un objeto cada uno.
aProductos = [
 {
	Nombre: "Camiseta Argentina",
	Descripcion: "Camiseta titular de la Seleccion Argentina del año 2019",
	Precio: 3500,
	Ruta: "items/camiseta_arg.png",
	id:1,
	Categoria: "Seleccion Argentina",
	alt:"Camiseta Argentina 2019"
},
 {
	Nombre: "Camiseta Retro",
	Descripcion: "Camiseta titular de la Selección Argentina del Mundial de 1978",
	Precio: 1700,
	Ruta: "items/camiseta_argentina78.png",
	id:2,	
	Categoria: "Seleccion Argentina",
	alt:"Camiseta Argentina retro"
},
 {
	Nombre: "Camiseta Boca Juniors",	
	Descripcion: "Camiseta titular de Boca Juniors de la temporada 2019/20",
	Precio: 2500,
	Ruta: "items/camiseta_boca.png",
	id:3,
	Categoria: "Futbol Argentino",
	alt:"Camiseta titular Boca"
},
 {
	Nombre: "Camiseta River Plate",
	Descripcion: "Camiseta titular de River Plate de la temporada 2019/20",
	Precio: 3500,
	Ruta: "items/camiseta_river.png",
	id:4,
	Categoria: "Futbol Argentino",	
	alt:"Camiseta titular River"
},
 {
	Nombre: "Camiseta San Lorenzo",
	Descripcion: "Camiseta titular de San Lorenzo del año 2019",
	Precio: 3200,
	Ruta: "items/camiseta_sanlorenzo.png",
	id:5,	
	Categoria: "Futbol Argentino",
	alt:"Camiseta titular San Lorenzo"
},
 {
	Nombre: "Camiseta Barcelona",
	Descripcion: "Camiseta suplente del Barcelona de la temporada 2019/20",
	Precio: 3500,
	Ruta: "items/camiseta_barcelona.png",
	id:6,
	Categoria: "Futbol Europeo",
	alt:"Camiseta suplente Barcelona"
}
];
const cantItems = d.querySelector("div > div > p > span:nth-of-type(1)");
const body = d.querySelector("body");
//Cuando el usuario cambie de categoría, aparecerá temporalmente un banner con un anuncio

function Banner () {
	
			let Divbanner = d.createElement("div");
			Divbanner.setAttribute("class", "modal");
			let Imgbanner = d.createElement("img");
			Imgbanner.setAttribute("class", "img-fluid");
			Imgbanner.src = "items/banner.png";
			Imgbanner.alt = "Banner publicitario";
			let cerrarBanner = d.createElement("a");
			cerrarBanner.setAttribute("href", "javascript:void(0)");
			cerrarBanner.innerHTML = "X";
			cerrarBanner.onclick = function () {
				Divbanner.style.display = "none";
		
			}
			body.appendChild(Divbanner);
			Divbanner.appendChild(cerrarBanner);
			Divbanner.appendChild(Imgbanner);
			
			setTimeout(function(){ 
				d.body.removeChild(Divbanner);
			}, 10000);
			window.onkeydown = function (e) {
				e = e || window.event;
				if (e.key == 'Escape') { 
					Divbanner.style.display = "none";
				}
			}
			 
	}	

let categoria, Producto, Img, Btn, Precio, Valor, Encabezado, description;
const Catalogo = d.getElementById('productos');
//Recorro el array que contiene los productos
for (let i = 0; i < aProductos.length; i++) {
	//Creo el div contenedor del producto
	 Producto = d.createElement('div');
	 Producto.setAttribute("id", aProductos[i].id);
	 Producto.setAttribute('class','prod_description');
	 //Asigno categoria
	 Producto.setAttribute('data-category',aProductos[i].Categoria);
	//Creo la img del producto 
	 Img = d.createElement('img');
	//Creo el h3 que será el nombre del producto
	 Encabezado = d.createElement('h3');
     Precio = d.createElement('p');
	Precio.innerHTML = 'Precio';
	 Valor = d.createElement('span');
	//Creo el botón que permitirá al usuario agregar el item al carrito
	 Btn = d.createElement('button');
	 Btn.setAttribute("data-pos", aProductos[i].id);
	 Btn.innerHTML = 'Agregar';
	//Asigno el alt y la ruta correspondiente a la img
	 Img.alt = aProductos[i].alt;
	 Img.src = aProductos[i].Ruta;
	//Asigno el contenido HTML del encabezado
	 Encabezado.innerHTML = aProductos[i].Nombre;
	//Asigno el precio de cada ítem
	 Valor.innerHTML = "  $" + aProductos[i].Precio;
	 description = d.createElement("p");
	 description.innerHTML = aProductos[i].Descripcion;
	 
	//Hago appendChild de cada etiqueta donde corresponde
	 Catalogo.appendChild(Producto);
	 Producto.appendChild(Img);
	 Producto.appendChild(Encabezado);
	 Producto.appendChild(description);	 
	 Precio.appendChild(Valor);
	 Producto.appendChild(Precio);
	 Producto.appendChild(Btn);

	//Creo la función del botón de agregar al carrito
	 Btn.onclick = function () {
		let ProductoAgregado = this.parentNode.getAttribute("id") - 1;
		aCarrito.push(aProductos[ProductoAgregado].id);
		cantItems.innerHTML = aCarrito.length;
		Total();
	}
}
let aCategorias = [{
		id: 1,
		name: 'Todos'
	},
	{
		id: 2,
		name: 'Seleccion Argentina'
	},
	{
		id: 3,
		name: 'Futbol Argentino'
	},
	{
		id: 4,
		name: 'Futbol Europeo'
	}];
//Creo los botones que servirán para que el usuario filtre los productos por categorías
let boton;
let contenedorDeCategorias = d.getElementById("categorias");

for (let i = 0; i < aCategorias.length; i++) {
	boton = d.createElement('button');
	boton.setAttribute('class','boton_categoria');
	boton.setAttribute('data-id',aCategorias[i].id);
	boton.setAttribute('data-category',aCategorias[i].name);
	boton.innerHTML = aCategorias[i].name;
	boton.onclick = Seleccionar;
	contenedorDeCategorias.appendChild(boton);

}
//Funciones para filtrar por categorías
function Seleccionar () {
	let cat = this.getAttribute('data-category');
	_c(cat);
	seleccionFiltro(cat);
	Banner();
}	
  function seleccionFiltro(cat) {
	let x, i;
	x = d.getElementsByClassName("prod_description");
	let xxx = d.querySelectorAll('[data-category="' + cat + '"]');
	switch (cat) {
		case 'Todos':
			for (let i = 0; i < x.length; i++) {
				x[i].style.cssText = 'display: block;';
			}
			break;
		case 'Seleccion Argentina':
			removerFilto()
			for (let i = 0; i < xxx.length; i++) {
			 	xxx[i].style.cssText = 'display: block;';
			}
			break;
		case 'Futbol Argentino':
			removerFilto()
		for (let i = 0; i < xxx.length; i++) {
		 	xxx[i].style.cssText = 'display: block;';
		}		
		case 'Futbol Europeo':
			removerFilto()
		for (let i = 0; i < xxx.length; i++) {
		 	xxx[i].style.cssText = 'display: block;';
		}
			break;
			default:
		removerFilto()
		for (let i = 0; i < xxx.length; i++) {
		 	xxx[i].style.cssText = 'display: block;';
		}
	}
}

let aImgs = d.querySelectorAll("#productos img");
let DivModal, Modal, ProductoaMostrar, Cerrar;

//Cuando el user haga click en la img, se abrirá la ventana modal del producto
for (let i = 0; i < aImgs.length; i++) {
	DivModal = d.createElement("div");
	//También creo la ventana modal del producto
	aImgs[i].onclick = function () {
		Modal = d.createElement("div");
		Modal.setAttribute("id", "ModalProducto");
		Modal.setAttribute("class", "modal");
		let div2 = d.createElement('div');
		div2.setAttribute('id',this.parentNode.getAttribute("id"));
		let img = d.createElement('img');
		img.src = this.src;
		img.alt = this.alt;
		let h3 = d.createElement('h3');
		h3.innerHTML = this.nextElementSibling.innerHTML;
		let description = d.createElement('p');
		description.innerHTML = this.nextElementSibling.nextElementSibling.innerHTML;
		let precio = d.createElement('p');
		precio.innerHTML = this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;		
		let Btn = d.createElement('button');
		Btn.innerHTML = 'Agregar';
		Btn.onclick = function () {
		let ProductoAgregado = this.parentNode.getAttribute("id") - 1;
		aCarrito.push(aProductos[ProductoAgregado].id);
		cantItems.innerHTML = aCarrito.length;
		Total();
	}
		div2.appendChild(img);
		div2.appendChild(h3);
		div2.appendChild(description);
		div2.appendChild(precio);
		div2.appendChild(Btn);
		d.body.appendChild(Modal);
		Modal.appendChild(div2)
		//Creo el elemento que cerrará la ventana modal
		Cerrar = d.createElement("a");
		Cerrar.href = "javascript:void(0)";
		Cerrar.innerHTML = "X";
		Cerrar.onclick = function () {
			Modal.style.display = "none";	
		}
		//Creo la función que detecte que el usuario presionó la tecla escape para cerrar la ventana modal y que lo haga
		window.onkeydown = function (e) {
			e = e || window.event;
			if (e.key == 'Escape') { 
				Modal.style.display = "none";
			}
		}
		//Hago los appendChild	
		Modal.appendChild(Cerrar);
	}		
}		
	
//Busco el botón que abre el carrito y le doy su función
const BtnCarrito = d.querySelector("div > div > button");
BtnCarrito.onclick = function () {
	//Creo la ventana modal del carrito
	let Carrito = d.createElement("div");
	Carrito.setAttribute("id", "ModalCarrito");
	Carrito.setAttribute("class", "modal");
	//Creo el div que contenerá los ítems del carrito
	let DivCarrito = d.createElement("div");
	//Creo el botón que cerrará el carrito
	let CerrarCarrito = d.createElement("a");
	CerrarCarrito.href = "javascript:void(0)";
	CerrarCarrito.innerHTML = "X";
	CerrarCarrito.onclick = function () {
		Carrito.style.display = "none";
	}	
	//Creo el ul que será la lista y sus hijos
	let Lista, itemCarrito, Borrar, Precio, Vaciar, Agregar, Quitar, Cantidad; 
	Lista = d.createElement("ul");
	//Cada vez que se agrege un producto al carrito, se verán algunos detalles del mismo como el nombre y el precio
	for (let i = 0; i < aCarrito.length; i++) {
		itemCarrito = d.createElement("li");
		itemCarrito.innerHTML = aProductos[aCarrito[i]-1].Nombre;
		Precio = d.createElement("span");
		Precio.innerHTML = aProductos[aCarrito[i]-1].Precio;
		Agregar = d.createElement("a");
		Agregar.innerHTML = "+";
		Agregar.onclick = function () {
			this.nextElementSibling.innerHTML++;
			aCarrito.push(this.parentNode);
			cantItems.innerHTML = aCarrito.length;
			//Total();
			span1.innerHTML = aCarrito.length;
			//span2.innerHTML = Total();
		}
		Quitar = d.createElement("a");
		Quitar.innerHTML = "-";
		Quitar.onclick = function () {
			this.previousElementSibling.innerHTML--;
			aCarrito.splice(this.parentNode, 1);
			cantItems.innerHTML = aCarrito.length;
			Total();
			span1.innerHTML = aCarrito.length;
			span2.innerHTML = Total();
			if (span2.innerHTML <= 0) {
				this.parentNode.remove(itemCarrito.childNodes);
			}
		}
		Cantidad = d.createElement("span");
		Cantidad.innerHTML = UnidadesaLlevar();
		Borrar = d.createElement("a");
		Borrar.href = "javascript:void(0)";
		Borrar.innerHTML = "Quitar";
		//Creo la función que servirá para borrar cada item		
		Borrar.onclick = function () {
			this.parentNode.remove(itemCarrito.childNodes);
			aCarrito.splice(['data-id'],1);
			Total();
			cantItems.innerHTML = aCarrito.length;	
			span1.innerHTML = aCarrito.length;
			span2.innerHTML = Total();		
		}
		itemCarrito.appendChild(Precio);
		itemCarrito.appendChild(Agregar);
		itemCarrito.appendChild(Cantidad)
		itemCarrito.appendChild(Quitar);
		itemCarrito.appendChild(Borrar);
		Lista.appendChild(itemCarrito);
	}

	//Creo el botón que vacía el carrito
	Vaciar = d.createElement("button");
	Vaciar.innerHTML = "Vaciar carrito";
	//Creo la funcionalidad del botón de vaciar carrito
	Vaciar.onclick =  function () {
		this.parentNode.firstChild.remove(Lista.ChildNodes);
		aCarrito = [];
		Total();
		cantItems.innerHTML = aCarrito.length;
		span1.innerHTML = aCarrito.length;
		span2.innerHTML = Total();
		}
	//Creo la función que detecte que el usuario presionó la tecla escape para cerrar la ventana modal y que lo haga
	window.onkeydown = function (e) {
		e = e || window.event;
		if (e.key == 'Escape') { 
			Carrito.style.display = "none";
		}
	}
	//cantidad de items en el carrito
	let p1 = d.createElement('p');
	let span1 = d.createElement('span');
	span1.innerHTML = aCarrito.length;
	p1.innerHTML = 'Productos en el carrito = ';
	p1.appendChild(span1);
	//Monto a pagar
	let p2 = d.createElement('p');
	let span2 = d.createElement('span');
	span2.innerHTML = Total();
	p2.innerHTML = 'Monto a pagar $ = ';
	p2.appendChild(span2);	
	//Creo el botón que lleva a el usuario al checkout
	let Comprar = d.createElement("button");
	Comprar.innerHTML = "Finalizar compra";
	Comprar.onclick = function () {
		//Creo el formulario completo del checkout
		let ModalFormulario = d.createElement("div");
		ModalFormulario.setAttribute("class", "modal");
		ModalFormulario.setAttribute("id", "formulario");
		//Creo el div contenedor del formulario
		let DivFormulario = d.createElement("div");
		DivFormulario.setAttribute("class", "container");
		DivFormulario.setAttribute("class", "form-group");
		let CerrarFormu = d.createElement("a");
		CerrarFormu.setAttribute ("href", "javascript:void(0)");
		CerrarFormu.innerHTML = "X";
		CerrarFormu.onclick = function () {
			ModalFormulario.style.display = "none";
		}
		
		
		//Creo el form, le doy sus atributos y creo los inputs
		let Formu = d.createElement("form");
		Formu.setAttribute("action", "#");
		Formu.setAttribute("method", "post");
		Formu.setAttribute("enctype", "multipart/form-data");
		let Titulo = d.createElement("h2");
		Titulo.innerHTML = "Finalizá tu compra";
		//Primero, los datos personales del usuario
		let Parte1 = d.createElement("h3");
		Parte1.innerHTML = "Ingresá tus datos";
		let Nombre = d.createElement("input");
		Nombre.setAttribute("type", "text");
		Nombre.setAttribute("class", "form-control");
		Nombre.setAttribute("name", "nombre");
		Nombre.value = "Nombre";
		let Lbl1 = d.createElement("label");
		Lbl1.innerHTML = "Ingresá tu nombre";
		let Apellido = d.createElement("input");
		Apellido.setAttribute("type", "text");
		Apellido.setAttribute("class", "form-control");
		Apellido.setAttribute("name", "apellido");
		Apellido.value = "apellido"
		let Lbl2 = d.createElement("label");
		Lbl2.innerHTML = "Ingresá tu apellido";		
		let Mail = d.createElement("input");
		Mail.setAttribute("type", "email");
		Mail.setAttribute("class", "form-control");
		Mail.setAttribute("name", "email");
		Mail.value = "email";
		let Lbl3 = d.createElement("label");
		Lbl3.innerHTML = "Ingresá tu mail";
		let Telefono = d.createElement("input");
		Telefono.setAttribute("type", "number");
		Telefono.setAttribute("class", "form-control");
		Telefono.setAttribute("name", "teléfono");
		Telefono.value = "Teléfono"
		let Lbl4 = d.createElement("label");
		Lbl4.innerHTML = "Ingresá tu número de teléfono";
		let DNI = d.createElement("input");
		DNI.setAttribute("type", "number");
		DNI.setAttribute("class", "form-control");
		DNI.setAttribute("name", "DNI");
		DNI.value = "DNI";
		let Lbl5 = d.createElement("label");
		Lbl5.innerHTML = "Ingresá tu número de DNI";
		//Segundo, que el usuario determine si quiere retirar o recibir el pedido en su casa, de ser esto último, pedirle que ingrese datos de la ubicación a enviar el pedido
		let Parte2 = d.createElement("h3");
		Parte2.innerHTML = "Elegí si querés recibir o retirar el producto";
		let Envio = d.createElement("input");
		Envio.setAttribute("type", "button");
		Envio.setAttribute("class", "btn");
		Envio.setAttribute("name", "Envio");
		Envio.value = "Envio";
		Envio.onclick = function () {
			//Solamente si el usuario elige que le envíen el producto, se le pedirá que ingrese los datos del domicilio donde será mandado el pedido
			let CodigoPostal = d.createElement("input");
			CodigoPostal.setAttribute("type", "number");
			CodigoPostal.setAttribute("class", "form-control");
			CodigoPostal.setAttribute("name", "Código Postal");
			CodigoPostal.value = "Código Postal";
			let Lbl6 = d.createElement("label");
			Lbl6.innerHTML = "Ingresá tu código postal";
			Lbl6.style.display = "block";
			let PedirDomicilio = d.createElement("h3");
			PedirDomicilio.innerHTML = "Ingresá la dirección del domicilio a dónde será enviado el pedido";
			let Ciudad = d.createElement("input");
			Ciudad.setAttribute("type", "text");
			Ciudad.setAttribute("class", "form-control");
			Ciudad.setAttribute("name", "ciudad");
			Ciudad.value = "Ciudad";
			let Lbl7 = d.createElement("label");
			Lbl7.innerHTML = "Ciudad";
			let Direccion = d.createElement("input");
			Direccion.setAttribute("type", "text");
			Direccion.setAttribute("class", "form-control");
			Direccion.setAttribute("name", "dirección");
			Direccion.value = "Direccion";
			let Lbl8 = d.createElement("label");
			Lbl8.innerHTML = "Direccion";
			let Piso = d.createElement("input");
			Piso.setAttribute("type", "text");
			Piso.setAttribute("class", "form-control");
			Piso.setAttribute("name", "piso");
			Piso.value = "Piso";
			let Lbl9 = d.createElement("label");
			Lbl9.innerHTML = "Piso";
			//Hago los appendChild correspondientes
			Formu.insertBefore(Lbl6, Formu.childNodes[15]);
			Formu.insertBefore(CodigoPostal, Formu.childNodes[16]);
			Formu.insertBefore(Lbl7, Formu.childNodes[17]);
			Formu.insertBefore(Ciudad, Formu.childNodes[18]);
			Formu.insertBefore(Lbl8, Formu.childNodes[19]);
			Formu.insertBefore(Direccion, Formu.childNodes[20]);
			Formu.insertBefore(Lbl9, Formu.childNodes[21]);
			Formu.insertBefore(Piso, Formu.childNodes[22]);
		}
		
		let Retiro = d.createElement("input");
		Retiro.setAttribute("type", "button");
		Retiro.setAttribute("class", "btn");
		Retiro.setAttribute("name", "retiro");
		Retiro.value = "Retiro";
		//Última parte, pedir forma de pago y datos de la tarjeta
		let Parte3 = d.createElement("h3");
		Parte3.innerHTML = "Elegí la forma de pago";
		let Credito = d.createElement("input");
		Credito.setAttribute("type", "radio");
		Credito.setAttribute("name", "Tarjeta de crédito");
		Credito.value = "Tarjeta de crédito";
		let Lbl10 = d.createElement("label");
		Lbl10.innerHTML = "Tarjeta de crédito"
		Lbl10.setAttribute("for", "Tarjeta de crédito");
		let Debito = d.createElement("input");
		Debito.setAttribute("type", "radio");
		Debito.setAttribute("name", "Tarjeta de débito");
		Debito.value = "Tarjeta de débito";
		let Lbl11 = d.createElement("label");
		Lbl11.innerHTML = "Tarjeta de débito";
		Lbl11.setAttribute("for", "Tarjeta de débito");
		let NumTarjeta = d.createElement("input");
		NumTarjeta.setAttribute("type", "number");
		NumTarjeta.setAttribute("class", "form-control");
		NumTarjeta.setAttribute("name", "número de la tarjeta");
		NumTarjeta.value = "Número de la tarjeta";
		let Lbl12 = d.createElement("label");
		Lbl12.innerHTML = "Número de la tarjeta";
		Lbl12.style.display = "block";
		let ElegirTarjeta = d.createElement("h4");
		ElegirTarjeta.innerHTML = "Seleccioná la tarjeta a usar"
		let Visa = d.createElement("input");
		Visa.setAttribute("type", "radio");
		Visa.setAttribute("name", "VISA");
		Visa.value = "VISA";
		let Lbl13 = d.createElement("label");
		Lbl13.innerHTML = "VISA";
		Lbl13.setAttribute("for", "VISA");
		let Amex = d.createElement("input");
		Amex.setAttribute("type", "radio");
		Amex.setAttribute("name", "American Express");
		Amex.value = "AMEX";
		let Lbl14 = d.createElement("label");
		Lbl14.innerHTML = "AMEX";
		Lbl14.setAttribute("for", "AMEX");
		let Maestro = d.createElement("input");
		Maestro.setAttribute("type", "radio");
		Maestro.setAttribute("name", "Maestro");
		Maestro.value = "Maestro";
		let Lbl15 = d.createElement("label");
		Lbl15.innerHTML = "Maestro";
		Lbl15.setAttribute("for", "Maestro");
		let MasterCard = d.createElement("input");
		MasterCard.setAttribute("type", "radio");
		MasterCard.setAttribute("name", "MasterCard");
		MasterCard.value = "MasterCard";
		let Lbl16 = d.createElement("label");
		Lbl16.innerHTML = "MasterCard";
		Lbl16.setAttribute("for", "MasterCard");
		let FechaTarjeta = d.createElement("h4");
		FechaTarjeta.innerHTML = "Fecha de vencimiento de la tarjeta y código";
		let DiayMes = d.createElement("input");
		DiayMes.setAttribute("type", "text");
		DiayMes.setAttribute("class", "form-control");
		DiayMes.setAttribute("name", "Día y mes");
		DiayMes.value = "Día y Mes"
		let Lbl17 = d.createElement("label");
		Lbl17.innerHTML = "DD/MM";
		let Año = d.createElement("input");
		Año.setAttribute("type", "number");
		Año.setAttribute("class", "form-control");
		Año.setAttribute("name", "Año");
		Año.value = "Año";
		let Lbl18 = d.createElement("label");
		Lbl18.innerHTML = "Año";
		let CodigoTarjeta = d.createElement("input");
		CodigoTarjeta.setAttribute("type", "number");	
		CodigoTarjeta.setAttribute("class", "form-control");	
		CodigoTarjeta.setAttribute("name", "Código");
		CodigoTarjeta.value = "Código";
		let Lbl19 = d.createElement("label");
		Lbl19.innerHTML = "Código";
		let ResetearFormu = d.createElement("input");
		ResetearFormu.setAttribute("type", "reset");
		ResetearFormu.setAttribute("class", "form-control");
		ResetearFormu.value = "Vaciar Formulario";	
		let Confirmar = d.createElement("input");
		Confirmar.setAttribute("type", "submit");
		Confirmar.setAttribute("class", "form-control");
		Confirmar.value = "Comprar";
		Confirmar.onsubmit = function () {
			location.reload();	
		}
		//Hago los appendChild correspondientes
		Formu.appendChild(Titulo);
		Formu.appendChild(Parte1);
		Formu.appendChild(Lbl1);
		Formu.appendChild(Nombre);
		Formu.appendChild(Lbl2);
		Formu.appendChild(Apellido);
		Formu.appendChild(Lbl3);
		Formu.appendChild(Mail);
		Formu.appendChild(Lbl4);
		Formu.appendChild(Telefono);
		Formu.appendChild(Lbl5);
		Formu.appendChild(DNI);
		Formu.appendChild(Parte2);
		Formu.appendChild(Envio);
		Formu.appendChild(Retiro);
		Formu.appendChild(Parte3);
		Formu.appendChild(Credito);
		Formu.appendChild(Lbl10);
		Formu.appendChild(Debito);
		Formu.appendChild(Lbl11);
		Formu.appendChild(Lbl12);
		Formu.appendChild(NumTarjeta);
		Formu.appendChild(ElegirTarjeta);
		Formu.appendChild(Visa);
		Formu.appendChild(Lbl13);
		Formu.appendChild(Amex);
		Formu.appendChild(Lbl14);
		Formu.appendChild(Maestro);
		Formu.appendChild(Lbl15);
		Formu.appendChild(MasterCard);
		Formu.appendChild(Lbl16);		
		Formu.appendChild(FechaTarjeta);		
		Formu.appendChild(Lbl17);		
		Formu.appendChild(DiayMes);		
		Formu.appendChild(Lbl18);		
		Formu.appendChild(Año);		
		Formu.appendChild(Lbl19);		
		Formu.appendChild(CodigoTarjeta);		
		Formu.appendChild(ResetearFormu);		
		Formu.appendChild(Confirmar);
		DivFormulario.appendChild(Formu);
		ModalFormulario.appendChild(CerrarFormu);
		ModalFormulario.appendChild(DivFormulario);
		body.appendChild(ModalFormulario);
		ModalFormulario.style.display = "block";	
		Carrito.style.display = "none";	

	}
	
	//Hago los appendChild 
	body.appendChild(Carrito);
	DivCarrito.appendChild(Lista);
	DivCarrito.appendChild(p1);
	DivCarrito.appendChild(p2);
	DivCarrito.appendChild(Vaciar);
	DivCarrito.appendChild(Comprar);
	Carrito.appendChild(CerrarCarrito);
	Carrito.appendChild(DivCarrito);
	Carrito.style.display = "block";

}

//Creo la función que mostrará el monto a pagar
function Total () {	
	let cantaPagar = d.querySelector("div > div > p:nth-of-type(2) span");
	let suma = 0;
	for (let i = 0; i < aCarrito.length; i++) {
		suma += aProductos[aCarrito[i]-1].Precio;
	}
	cantaPagar.innerHTML = "$ " + suma;
	return suma;
}
function UnidadesaLlevar () {
	let CantItem = aCarrito.indexOf(Producto.id, 0);
	return CantItem * -1;
}
function removerFilto() {
	let x;
	x = d.getElementsByClassName("prod_description");
	for (let i = 0; i < x.length; i++) {
		x[i].style.cssText = 'display: none;';
	}
}