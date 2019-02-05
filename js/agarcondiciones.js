//Definimos dos contextos, uno para el fondo y el otro para los actores
var lienzofondo = document.getElementById("lienzofondo");
var contextofondo = lienzofondo.getContext("2d");

var lienzoactores = document.getElementById("lienzoactores");
var contextoactores = lienzoactores.getContext("2d");

var temporizador;

//Cargar imagenes de fondo, jugador y enemigo
var fondo = new Image();
fondo.src = "img/fondodark.png";
var imgjugador = new Image();
imgjugador.src = "img/korosensei.png";

//Declaramos Variables
var comida = new Array();
var numComida = 250;
var colores = ["red", "blue", "yellow", "lime", "pink", "orange", "teal", "maroon", "purple"];

var jugador = new Bacteria();

var nombre = "gabri";
var ratonX = 150;
var ratonY = 150;

inicio();