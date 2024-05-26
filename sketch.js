let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria ();
  
}

function palavraAleatoria () {
  
  palavras = ["pneumoultramicroscopicossilicovulcanoconiótico", "otorrinolaringologista", "inconstitucionalissimamente"];
  return random(palavras);
}

function inicializaCores(){
  background("black");
  fill("pink");
  textSize(17);
  textAlign(CENTER, CENTER);
}

function palavraParcial (minimo, maximo){
    let quantidade = map(mouseX, minimo, maximo, 1, palavra.length)
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
    
  let texto = palavraParcial (0, width);
  text(texto, 200, 200);
}