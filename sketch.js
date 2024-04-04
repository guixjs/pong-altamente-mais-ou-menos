let xBolinha= 300
let yBolinha= 200
let diametro=15
let raio = diametro/2

let velocidadeXBolinha=6
let velocidadeYBolinha=6

let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let meusPontos = 0
let pontosOponentes = 0



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  exibirBolinha()
  movimentarBolinha()
  verificarColisaoBolinha()
  mostrarRaquete(xRaquete,yRaquete)
  movimentoMinhaRaquete()
  verificaColisaoRaquete()
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentarRaqueteOponente()
  verificaColisaoRaqueteOponente()
  marcarPonto()
  bolinhaNaoFicaPresa()
 
}

function exibirBolinha(){
    circle(xBolinha,yBolinha,diametro);
}

function movimentarBolinha(){  
  xBolinha += velocidadeXBolinha;
  yBolinha+= velocidadeYBolinha;
}

setTimeout(movimentarBolinha(),5)

function verificarColisaoBolinha(){
    if(xBolinha+raio>width || xBolinha-raio<0){
    velocidadeXBolinha *= -1;
  }
    if(yBolinha +raio >height || yBolinha-raio<0){
    velocidadeYBolinha *= -1;
}
}
function mostrarRaquete(x,y){
rect(x,y , raqueteComprimento,raqueteAltura)

}

function movimentoMinhaRaquete(){
  if(keyIsDown(87)){
    yRaquete-=10;
  }
  if(keyIsDown(83)){
    yRaquete+=10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha-raio<xRaquete + raqueteComprimento && yBolinha-raio<yRaquete+raqueteAltura && yBolinha+raio>yRaquete){
    velocidadeXBolinha *=-1;
  }
}

function verificaColisaoRaqueteOponente(){
  if(xBolinha+raio>xRaqueteOponente-10 + raqueteComprimento && yBolinha-raio<yRaqueteOponente+raqueteAltura && yBolinha+raio>yRaqueteOponente){
    velocidadeXBolinha *=-1;
  }
}
function movimentarRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente-=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente+=10;
  }
  //n funciona, pq a maquina nunca vai errar e eu n sei como corrigir
  //velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30
  //yRaqueteOponente +=velocidadeYOponente 
}

function marcarPonto(){
  if(xBolinha<10){
    exibirMeusPontos('jogador',meusPontos +=1)
  }
  if(xBolinha>590){
    exibirPontosAdiversario('adversario',pontosOponentes+=1)
  }

}


function exibirMeusPontos(h1,texto){
  let meuPlacar = document.getElementById('jogador')
  meuPlacar.innerHTML = texto
}
function exibirPontosAdiversario(h1,texto2){
  let pontosOponentes = document.getElementById('adversario')
  pontosOponentes.innerHTML = texto2
}

function bolinhaNaoFicaPresa(){
  if (xBolinha + raio < 0 || xBolinha+raio>610){
  xBolinha = 300;
  }
  
}

