//estão fora para que todas as funções tenham acesso à eles
let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let somDoPulo;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const inimigos = [];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]


const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

//pra carregar coisas como imagens e sons, tem uma fção no p5 chamada preload
//OBS: O loadImage é função do p5 tbm
function preload() {
  imagemCenario = loadImage('https://i.imgur.com/jRCt0JV.png');
  imagemPersonagem = loadImage('https://i.imgur.com/IeWhcfL.png');
  imagemInimigo = loadImage('https://i.imgur.com/oy55ZMq.png');
  imagemInimigoGrande = loadImage('https://i.imgur.com/1FcdB20.png');
  imagemInimigoVoador = loadImage('https://i.imgur.com/eqBi9db.png');
  imagemGameOver= loadImage('https://i.imgur.com/MciYoyl.png');
  somDoJogo = loadSound('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/sons/somPulo.mp3');
}

//A função setup só roda uma vez, antes do jogo ser desenhado, enquanto a draw roda várias vezes
function setup() {
  createCanvas(windowWidth, windowHeight); //faz com que o tamanho da tela do jogo seja do tamanho da tela que ele está agora
  cenario = new Cenario(imagemCenario, 3); //está aqui e não no draw para comer o menor espaço de memória possível
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104,10, 200);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 2750);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150,10, 1500);

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);


  frameRate(40) //(frameRate) mostra a quantidade de frames rodados por segundo
  //toca o som do jogo
  somDoJogo.loop(); //essa função repete a música quando acaba, enquanto somDoJogo.play() só toca uma vez
}

//essa função captura eventos do mouse/teclado
function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

//p5 trabalha com plano cartesiano, então vc pode passar as formas pra ele desenhar e pá
function draw() {

  //o p5 lê de cima pra baixo, por isso que se colocasse o background depois da personagem ele ficaria na frente dela  
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/3);
      noLoop(); //essa função faz tudo parar de andar
    }
  });

  
}