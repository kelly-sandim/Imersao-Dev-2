class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3); //está aqui e não no draw para comer o menor espaço de memória possível
        pontuacao = new Pontuacao();

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula()
            somDoPulo.play()
        }
    }

    draw() {
        //o p5 lê de cima pra baixo, por isso que se colocasse o background depois da personagem ele ficaria na frente dela  
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            inimigoAtual++;
            if (inimigoAtual > 2) {
                inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10, 30));
        }

        if (personagem.estaColidindo(inimigo)) {
            image(imagemGameOver, width / 2 - 200, height / 3);
            noLoop(); //essa função faz tudo parar de andar
        }
    }
}