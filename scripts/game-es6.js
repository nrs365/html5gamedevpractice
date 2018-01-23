// logic for the Count game

class NumberedBox extends createjs.Container {
	constructor(number=0) {
		super();

		var movieclip = new lib.NumberedBox();
		movieclip.numberText.text = number;
		this.addChild(movieclip);

		//random position
		movieclip.x = Math.random() * 200;
		movieclip.y = Math.random() * 200;
	}
}

class Game{
  constructor() {
    console.log(`Welcome to the game. Version ${this.version()}`);
    //which canvas for game stage
    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    //ticker is like a clock that keeps running
    createjs.Ticker.setFPS(60);
    //keeps re-drawing the stage
    createjs.Ticker.on("tick", this.stage);

    //background
    this.stage.addChild(new lib.Background());

    //test the code
    // var circle = new createjs.Shape();
    // circle.graphics.beginFill("red").drawCircle(0,0,40);
    // circle.x = 100;
    // circle.y = 100;
    // this.stage.addChild(circle);

    this.stage.addChild(new NumberedBox(88));



  }
  version(){
    return '1.0.0';
  }
}

// start the game
var game = new Game();
