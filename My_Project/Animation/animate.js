var verticalMove = 0;
var horizontalMove = 0;
var direction = 1;
var ballSize = 80;
var normalSize = ballSize;
var ballNumber = 0;
var ballCollection = [];


class Ball {
  constructor(number, direction, verticalMove, horizontalMove, ballSize, normalSize) {
    this.number = number;
    this.directions = direction;
    this.verticalMoves = verticalMove;
    this.horizontalMoves = horizontalMove;
    this.ballSizes = ballSize;
    this.normalSizes = normalSize;
  }
  blowIt() {
    this.ballSizes = this.ballSizes + 30;
    document.getElementById(`movingObject${this.number}`).style.width = `${this.ballSizes}px`;
    document.getElementById(`movingObject${this.number}`).style.height = `${this.ballSizes}px`;
}

  shrinkIt() {
    this.ballSizes = this.normalSizes;
    document.getElementById(`movingObject${this.number}`).style.width = `${this.ballSizes}px`;
    document.getElementById(`movingObject${this.number}`).style.height = `${this.ballSizes}px`;
}

  moveIt() {
    // let dir = this.directions;
    // let num = this.number;
    // let bSize = this.ballSizes;
    // let vMove = this.verticalMoves;
    // let hMove = this.horizontalMoves;
    console.log(this.normalSizes);
    let move = setInterval(makeItSlow, 1);
    let makeItSlow = () => {
        //Direction 1
        // console.log(dir);
        if (this.direction == 1) {
          if (document.getElementById(`movingObject${this.number}`).style.top == `${document.documentElement.clientHeight-this.ballSizes}px`) {
            this.direction = 2;
          }
          else if (document.getElementById(`movingObject${this.number}`).style.left == `${document.documentElement.clientWidth-this.ballSizes}px`) {
            this.direction = 4;
          } else {
          this.verticalMoves = this.verticalMoves + 1;
          this.horizontalMoves = this.horizontalMoves + 1;
          document.getElementById(`movingObject${this.number}`).style.top = `${this.verticalMoves}px`;
          document.getElementById(`movingObject${this.number}`).style.left = `${this.horizontalMoves}px`;
          }
        }
        //this.directionection 2
        else if(this.direction == 2) {
          if (document.getElementById(`movingObject${this.number}`).style.top == "0px") {
            this.direction = 1;
            }
          else if (document.getElementById(`movingObject${this.number}`).style.left == `${document.documentElement.clientWidth-this.ballSizes}px`) {
            this.direction = 3;
          } else {
            this.verticalMoves = this.verticalMoves - 1;
            this.horizontalMoves = this.horizontalMoves + 1;
            document.getElementById(`movingObject${this.number}`).style.top = `${this.verticalMoves}px`;
            document.getElementById(`movingObject${this.number}`).style.left = `${this.horizontalMoves}px`;
            }
        }
        //this.directionection 3
        else if (this.direction == 3) {
          if (document.getElementById(`movingObject${this.number}`).style.top == "0px") {
            this.direction = 4;
          }
          else if (document.getElementById(`movingObject${this.number}`).style.left == "0px") {
            this.direction = 2;
          } else {
            this.verticalMoves = this.verticalMoves - 1;
            this.horizontalMoves = this.horizontalMoves - 1;
            document.getElementById(`movingObject${this.number}`).style.top = `${this.verticalMoves}px`;
            document.getElementById(`movingObject${this.number}`).style.left = `${this.horizontalMoves}px`;
          }
        }
        //this.directionection 4
        else if(this.direction == 4) {
          if (document.getElementById(`movingObject${this.number}`).style.top == `${document.documentElement.clientHeight-this.ballSizes}px`) {
            this.direction = 3;
          }
          else if (document.getElementById(`movingObject${this.number}`).style.left == "0px") {
            this.direction = 1;
          } else {
            this.verticalMoves = this.verticalMoves + 1;
            this.horizontalMoves = this.horizontalMoves - 1;
            document.getElementById(`movingObject${this.number}`).style.top = `${this.verticalMoves}px`;
            document.getElementById(`movingObject${this.number}`).style.left = `${this.horizontalMoves}px`;
          }
        }
    }
  }
}
// ballCollection[0] = new Ball();
// ballNumber = 1;
// ballCollection[1] = new Ball();
// console.log(ballCollection[ballNumber]);

function createBall() {
    // console.log(ballNumber);
    ballCollection[ballNumber] = new Ball(ballNumber, direction, verticalMove, horizontalMove, ballSize, normalSize);
    let ball = document.createElement("div");
    let count = 0;
    let ballProperty = ["class", "id", "onclick", "onmouseover", "onmouseout"];
    let ballPropertyValues = ["ball", `movingObject${ballNumber}`, `ballCollection[${ballNumber}].moveIt()`, `ballCollection[${ballNumber}].blowIt()`, `ballCollection[${ballNumber}].shrinkIt()`];
    ballProperty.forEach(element => {
      let attr = document.createAttribute(element);
      attr.value =  ballPropertyValues[count++];
      console.log(attr);
      ball.setAttributeNode(attr);
    });
    document.body.appendChild(ball);
    // console.log(ballCollection[ballNumber]);
    ballNumber++;
    console.log(ballCollection);
}


function createSomething() {
    let paragraph = document.createElement("p");
    let node = document.createTextNode("This is new.");
    paragraph.appendChild(node);
    var element = document.body;
    element.appendChild(paragraph);
}

setInterval(createBall, 3000);



// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   bark() {
//       console.log(this);
//   }
// }
// let dog1 = new Dog("Patani", 5);
// dog1.bark();

// (function addBall() {
//     ballNumber = ballNumber + 1;
//     console.log(ballNumber)
// })();

let array = []
class Greet{
    hay() {
    console.log("Hi");
}}
array[0] = new Greet();

