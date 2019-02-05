function bucle() {
	//Limpiamos pantalla
	contextoactores.clearRect(0, 0, lienzoactores.width, lienzoactores.height);
	//Pintamos el fondo de pantalla
	contextoactores.drawImage(fondo, 0, 0, lienzoactores.width, lienzoactores.height);
	
	//Dibujamos la comida
	for (var i=0; i<numComida; i++) {
		comida[i].dibComida();
	}
	
	//Mecanicas para el jugador
	jugador.mover();
	jugador.dibjugadorimg();
	jugador.comerComida();
	jugador.dibmaxscore();
	
	contextoactores.fillStyle = "blue";
	contextoactores.fillRect(jugador.posX, jugador.posY, 5, 5);
	
	
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 33);
}