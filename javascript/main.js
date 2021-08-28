var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

class Dino {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Cactus {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Init Dino
var dino = new Dino(10, 100, 50, 50, "green");
//dino.draw();

// var cactus = new Cactus(500, 100, 50, 50, "red");
// cactus.draw();

var timer = 0;
var arrCactus = [];

function runPerFrame() {
    // // Exit Condition
    // if (cactus.x < 0) {
    //     alert("End!");
    //     return 0;
    // }

    // Run
    requestAnimationFrame(runPerFrame);
    timer++;

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Init Cactus
    if (timer % 60 === 0) {
        var cactus = new Cactus(500, 100, 50, 50, "red");
        arrCactus.push(cactus);
    }

    // Draw Cactus
    arrCactus.forEach((cactus) => {
        cactus.x -= 2;
        cactus.draw();
    })

    // Delete Cactus
    arrCactus.forEach((cactus) => {
        if (cactus.x < -50) {
            arrCactus.shift();
        }
    })

    // Draw Dino
    dino.draw();
}

runPerFrame();