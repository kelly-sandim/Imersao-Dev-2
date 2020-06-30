//pra carregar coisas como imagens e sons, tem uma fção no p5 chamada preload
//OBS: O loadImage é função do p5 tbm
function preload() {
    imagemCenario = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/assets/telaInicial.png');
    imagemVida = loadImage('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/assets/coracao.png');
    fonteTelaInicial = loadFont('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/imagens/assets/fonteTelaInicial.otf');
    somDoJogo = loadSound('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/sons/trilha_jogo.mp3');
    somDoPulo = loadSound('https://raw.githubusercontent.com/kelly-sandim/Imersao-Game-Dev/master/sons/somPulo.mp3');
}