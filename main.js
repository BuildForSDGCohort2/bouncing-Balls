//setup canvas

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const width = canvas.width = window.innerWidth;
// const height = canvas.height = window.innerHeight;

// // // function to generate random number

// function random(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
// }

// // // // define Ball constructor

// function Ball(x, y, velX, velY, color, size) {
//     this.x = x;
//     this.y = y;
//     this.velX = velX;
//     this.velY = velY;
//     this.color = color;
//     this.size = size;
// }

// // // define ball draw method

// Ball.prototype.draw = function () {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//     ctx.fill();
// };

// // // define ball update method

// Ball.prototype.update = function () {
//     if ((this.x + this.size) >= width) {
//         this.velX = -(this.velX);
//     }

//     if ((this.x - this.size) <= 0) {
//         this.velX = -(this.velX);
//     }

//     if ((this.y + this.size) >= height) {
//         this.velY = -(this.velY);
//     }

//     if ((this.y - this.size) <= 0) {
//         this.velY = -(this.velY);
//     }

//     this.x += this.velX;
//     this.y += this.velY;
// };

// // // define ball collision detection

// Ball.prototype.collisionDetect = function () {
//     for (let j = 0; j < balls.length; j++) {
//         if (!(this === balls[j])) {
//             const dx = this.x - balls[j].x;
//             const dy = this.y - balls[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < this.size + balls[j].size) {
//                 balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
//             }
//         }
//     }
// };

// // // define array to store balls and populate it

// let balls = [];

// while (balls.length < 25) {
//     const size = random(10, 20);
//     let ball = new Ball(
//         // ball position always drawn at least one ball width
//         // away from the adge of the canvas, to avoid drawing errors
//         random(0 + size, width - size),
//         random(0 + size, height - size),
//         random(-7, 7),
//         random(-7, 7),
//         'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
//         size
//     );
//     balls.push(ball);
// }

// // // define loop that keeps drawing the scene constantly

// function loop() {
//     ctx.fillStyle = 'rgba(0,0,0,0.25)';
//     ctx.fillRect(0, 0, width, height);

//     for (let i = 0; i < balls.length; i++) {
//         balls[i].draw();
//         balls[i].update();
//         balls[i].collisionDetect();
//     }

//     requestAnimationFrame(loop);
// }

// // loop();

// class Ball {
//     constructor(x, y, color, size) {
//         this.x = x,
//             this.y = y,
//             this.color = color,
//             this.size = size
//     }
// }

// const myRedBall = new Ball(2, 3, 'Red', 'small');

// console.log(myRedBall);

//converting objects to json

// let cardIds = {
//     id: 123,
//     color: "red",
//     size: "small",
// };

// console.log(JSON.stringify(cardIds));

// //converting an array of numbre to json

// let cardId = [{
//         cardId: 567
//     },
//     {
//         cardId: 876
//     },
//     {
//         cardId: 654
//     },
//     {
//         color: "red"
//     },
//     {
//         size: "small"
//     },
// ];
// console.log(JSON.stringify(cardId));

///parse json

// let carID = `
// [
//     {"carID" :345},
//     {"carSize" : 656},
//     {"carMade" :2020}
// ]`;
// let carD = JSON.parse(carID);

// console.log(carD);


//array Iterations
let cardId = [{
        cardId: 123,
        color: "red"
    },
    {
        cardId: 456,
        color: "blue"
    },
    {
        cardId: 789,
        color: "grey"
    }
];
// // cardId.forEach(car => console.log(car));
// cardId.forEach((car, index) => console.log(car, index));
// let style = cardId.filter(
//     car => car.color === 'grey'
// );
// // console.log(style)
// let car = cardId.find(
//     car => car.cardId > 500
// );
// console.log(car);

class Car {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }
    identity(suffix) {
        return `Car id: ${this.id}, the model: ${this.name}`;
    }
}
let car = new Car(34, 'Range Rover');
console.log(car.identity('!!!'));