class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }
  
  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }    
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);//depois de 1 seg perde invencibilidade
  }
  
  //Para usar a API de colisão, tem de decidir quem vai colidir com quem
  //Por isso colocamos na personagem, pq ela quem vai colidir com os outros
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false;
    }
    const precisao = .7
    //é um collideRectRect pq a personagem e os inimigos são retângulos, mas tbm tem collideRectCircle
    //passa x, y, largura e altura tanto da personagem quanto do inimigo
    const colisao = collideRectRect( 
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }

}