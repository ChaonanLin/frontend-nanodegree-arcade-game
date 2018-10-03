// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //Setting the position
    this.x = x;
    this.y = y;
    //Setting the speed
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt*this.speed;

    if (this.x > 510) {
        this.x = -50;
        this.speed = Math.floor(Math.random()*200+50);
    }
    //add collision with the Player (you need to implement)
    if (Math.abs(this.x - player.x)<100 && Math.abs(this.y - player.y)<85) {
        reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y) {
    //loading the image
    this.sprite ='images/char-boy.png';
    this.x = x;
    this.y = y;
}

// This class requires an update(), render() and
// a handleInput() method.

//add render method for the Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//add update method for the Palyer
Player.prototype.update = function(dt) {
    if (this.x > 400) {
        this.x = this.x - 100;
    }
    if (this.x < 0) {
        this.x = this.x + 100;
    }
    if (this.y < 50) {
        reset();
    }
    if (this.y > 400) {
        this.y = 400;
    }
};

// add reset function
function reset() {
    player.x = 200;
    player.y = 400;
}

//add handleInput method
Player.prototype.handleInput = function(Direction) {
    if (Direction === 'left') {
        this.x = this.x - 100;
    }
    else if (Direction === "up")  {
        this.y = this.y - 85;
    }
    else if (Direction === "right") {
        this.x = this.x + 100;
    }
    else if (Direction === "down") {
        this.y = this.y + 85;
    }
};


// Now instantiate your objects.


// Place all enemy objects in an array called allEnemies
var allEnemies=[new Enemy(0,60,80), new Enemy(0,145,50),new Enemy(0,230,100)];
// Place the player object in a variable called player
var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
