//Criar Objeto bola
var bola = {
  x: 20,
  y: 30,
  raio: 30,
  velocidadeX: 0,
  velocidadeY: 0,
  cor:["blue","red","green","purple"]
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Criar um objeto circular para representar a bola
  circle(bola.x,bola.y,bola.raio);

  //Pintar a bola
  fill(bola.cor[0]);

  //Mudar velocidade da bola
  bola.velocidadeX = 1;
  bola.x = bola.x + bola.velocidadeX;


}