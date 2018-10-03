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
    this.x = this.x + dt*this.speed;

    if (this.x > 510) {
        this.x = -50;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(playerX,playerY) {
    //loading the image
    this.sprite ='images/char-horn-girl.png'
    //setting the player initial location
    this.initialX = 200;
    this.initialY = 450;
    this.x = playerX;
    this.y = playerY;
}

// This class requires an update(), render() and
// a handleInput() method.

//add render method for the Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//add update method for the Palyer
Player.prototype.update = function() {
    if (this.x > 505) {
        this.x = this.x - 100;
    }
    if (this.x < 0) {
        this.x = this.x + 100;
    }
    if (this.y < 100) {
        this.x = 200;
        this.y = 450;
    }
    if (this.y > 450) {
        this.y = this.y - 100;
    }
};

//add handleInput method
Player.prototype.handleInput = function(Direction) {
    if (Direction === 'left') {
        var playerX = this.x - movement;
    }
    else if (Direction === "up")  {
        var playerY = this.y + movement;
    }
    else if (Direction === "right") {
        var playerX = this.x + movement;
    }
    else if (Direction === "down") {
        var playerY = this.y - movement;
    }
};

var movement =100;

// Now instantiate your objects.


// Place all enemy objects in an array called allEnemies
var allEnemies=[new Enemy(0,0,80), new Enemy(0,100,50),new Enemy(0,300,100),new Enemy(0,400,70)];
// Place the player object in a variable called player
var player = new Player();


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
