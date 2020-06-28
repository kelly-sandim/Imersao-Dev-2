class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }
  
  pula() {
    this.velocidadeDoPulo = -30
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
    }
  }
  
  //Para usar a API de colisão, tem de decidir quem vai colidir com quem
  //Por isso colocamos na personagem, pq ela quem vai colidir com os outros
  estaColidindo(inimigo) {
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