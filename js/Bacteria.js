function Bacteria() {
	//Propiedades
		this.posX = lienzoactores.width*0.5;
		this.posY = lienzoactores.height*0.5;
		this.tamanyo = 15;
		this.velocidad = 5;
		
		this.factordist;
		this.dist;
		this.distmax;
		this.angulo;
		this.score = 0;
		this.scoremax = 0;
		
	//Metodos
		//Dibujamos a la bacteria
		//Nombre del jugador
		this.dibnombre = function() {
			tamfont = Math.round(this.tamanyo*0.5);
			tamnombre = tamfont*Math.cos(Math.PI*0.25);
			contextoactores.font = ""+tamfont+"px ubuntu";
			contextoactores.fillStyle = "black";
			contextoactores.fillText(nombre, this.posX-nombre.length*tamnombre*0.35, this.posY+tamnombre*0.5);
		}
		
		//Bacteria del jugador
		this.dibjugador = function(){
			//Circulo
			contextoactores.fillStyle = "red";
			contextoactores.beginPath();
			contextoactores.arc(this.posX,this.posY,this.tamanyo,0,Math.PI*2,false);
			contextoactores.fill();
			//Borde
			contextoactores.lineWidth = 2;
			contextoactores.strokeStyle = "#610B0B";
			contextoactores.stroke();
			//Nombre
			this.dibnombre();
		}
		//Imagen del jugador
		this.dibjugadorimg = function() {
			contextoactores.drawImage(imgjugador, this.posX-this.tamanyo, this.posY-this.tamanyo, this.tamanyo*2, this.tamanyo*2);
			//this.dibnombre();
		}
		
		//Modificamos su velocidad en funcion del tamanyo
		this.tamVelocidad = function() {
			distmax = 3*this.tamanyo;
			dist = Math.pow(Math.pow(this.posX-ratonX, 2)+Math.pow(this.posY-ratonY, 2), 0.5);
			if (dist > distmax) {dist = distmax};
			factordist = dist/distmax;
			this.velocidad = (-0.03*this.tamanyo+6)*factordist;
		}
		
		//Evitamos que se pueda salir del canvas
		this.colisionParedes = function(){
			if(this.posX>lienzoactores.width){this.posX=lienzoactores.width;}
			if(this.posX<0){this.posX=0;}
			if(this.posY>lienzoactores.height){this.posY=lienzoactores.height;}
			if(this.posY<0){this.posY=0;}
		}
		
		//Calculamos el angulo
		this.hallarAngulo = function(xOrigen, yOrigen, xObjetivo, yObjetivo) {
			return Math.atan2(yObjetivo - yOrigen, xObjetivo - xOrigen);
		}
		
		//Movemos a la bacteria
		this.mover = function(){
			this.tamVelocidad();
			this.angulo = this.hallarAngulo(this.posX, this.posY, ratonX, ratonY);
			this.posX += Math.cos(this.angulo)*this.velocidad;
			this.posY += Math.sin(this.angulo)*this.velocidad;
			this.colisionParedes();
		}
		
		//El Bot come la comida que hay repartida por el lienzo
		this.comerComida = function() {
			for (var i=0; i<numComida; i++) {
				distancia = Math.pow(Math.pow(this.posX-comida[i].posX, 2)+Math.pow(this.posY-comida[i].posY, 2), 0.5)
				if (distancia <= this.tamanyo + comida[i].tamanyo)
					{
					this.tamanyo += comida[i].tamanyo*0.2;
					this.score ++;
					this.actualizarmaxscore();
					comida.splice(i,1);
					numComida--;
					}
				}
		}
		
		//Escribimos la puntuacion maxima en la esquina superior izquierda
		this.dibmaxscore = function() {
			contextoactores.font = "25px ubuntu";
			contextoactores.fillStyle = "white";
			contextoactores.fillText("Score: " + this.scoremax, 15, 30);
		}
		
		//Actualizamos puntuacion maxima alcanzada
		this.actualizarmaxscore = function() {
			if (this.score > this.scoremax) {this.scoremax = this.score;}
		}
}