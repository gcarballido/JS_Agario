function Comida() {
	//Propiedades
		this.posX;
		this.posY;
		this.tamanyo = 5;
		this.color;
		
	//Metodos
		//Pintar comida
		this.dibComida = function() {
			contextoactores.fillStyle = this.color;
			contextoactores.beginPath();
			contextoactores.arc(this.posX,this.posY,this.tamanyo,0,Math.PI*2,false);
			contextoactores.fill();
		};
}