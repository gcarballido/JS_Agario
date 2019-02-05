function inicio() {
	//Damos valores a las propiedades de la comida
	for (var i=0; i<numComida; i++) {
		comida[i] = new Comida();
		comida[i].posX = Math.random()*lienzoactores.width;
		comida[i].posY = Math.random()*lienzoactores.height;
		comida[i].color = colores[Math.round(Math.random()*colores.length)-1];
	}
	
	//Cogemos la posicion X e Y del raton
	$("canvas").mousemove(function(event){
		// Se corrige la posicion del canvas lienzo
		var rect = lienzoactores.getBoundingClientRect();
		ratonX = event.pageX - rect.left;
		ratonY = event.pageY - rect.top;
	});
	
	console.log("Bienvenido a Agario");
	temporizador = setTimeout("bucle()", 1000);
}