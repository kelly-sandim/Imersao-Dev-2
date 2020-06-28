class Pontuacao {
    constructor() {
        this.pontos = 0;        
    }

    exibe() {
        textAlign(RIGHT);
        fill('#fff'); //muda a cor do texto
        textSize(50);
        text(parseInt(this.pontos), width - 30, 50); //para exibir os pontos(<texto a ser exibido>, <eixo x>, <eixo y>)
    }

    adicionarPonto() {
        this.pontos = this.pontos + 0.2;
    }
}