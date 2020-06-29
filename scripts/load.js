//pra carregar coisas como imagens e sons, tem uma fção no p5 chamada preload
//OBS: O loadImage é função do p5 tbm
function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
}