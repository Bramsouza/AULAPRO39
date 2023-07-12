class Game {
  //Crie uma função constructor() em game.js para declarar propriedades para resetTitle e resetButton.
  constructor() {
    

    //definir o texto do placar
    
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    //C39 -  código para exibir o botão e o texto
    

    ////C39 -  código para exibir o botão e o texto
    

    //Atribuir posição e texto para leaderboardTitle, leader1 e leader2
   
  }

  play() {
    this.handleElements();

    //chamando a função handleResetButton() dentro de play()
   

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //Chamando this.showLeaderboard() dentro do método play().
      

     //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {
       
        index = index + 1;

        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          camera.position.y = cars[index - 1].position.y;
        }
      }

      // manipulando eventos de teclado
      

      drawSprites();
    }
  }

  handleResetButton() {
    
      //.set() para substitui os valores dos campos do banco de dados com 0 para carsatEnd, playerCount e gameState
      
  }

  showLeaderboard() {
    
    //Condição é verificar se o primeiro jogador tem classificação 1 e o player 2 tem classificação 2
    
  }

  //função para movimentar os players
  handlePlayerControls() {
    
  }
}
