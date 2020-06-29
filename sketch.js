//A função setup só roda uma vez, antes do jogo ser desenhado, enquanto a draw roda várias vezes
function setup() {
  createCanvas(windowWidth, windowHeight); //faz com que o tamanho da tela do jogo seja do tamanho da tela que ele está agora
  frameRate(40) //(frameRate) mostra a quantidade de frames rodados por segundo
  //toca o som do jogo
  somDoJogo.loop(); //essa função repete a música quando acaba, enquanto somDoJogo.play() só toca uma vez
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();

  cenas = {
    jogo,
    telaInicial
  };
}

//essa função captura eventos do mouse/teclado
function keyPressed() {
  jogo.keyPressed(key);
}

//p5 trabalha com plano cartesiano, então vc pode passar as formas pra ele desenhar e pá
function draw() {
  cenas[cenaAtual].draw();  
}