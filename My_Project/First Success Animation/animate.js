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
    let dir = this.directions;
    let num = this.number;
    let bSize = this.ballSizes;
    let vMove = this.verticalMoves;
    let hMove = this.horizontalMoves;
    console.log(this.normalSizes);
    let move = setInterval(makeItSlow, 1);debugger;
    function makeItSlow(){
        //Direction 1
        // console.log(dir);
        if (dir == 1) {
          if (document.getElementById(`movingObject${num}`).style.top == `${document.documentElement.clientHeight-bSize}px`) {
            dir = 2;
          }
          else if (document.getElementById(`movingObject${num}`).style.left == `${document.documentElement.clientWidth-bSize}px`) {
            dir = 4;
          } else {
          vMove = vMove + 1;
          hMove = hMove + 1;
          document.getElementById(`movingObject${num}`).style.top = `${vMove}px`;
          document.getElementById(`movingObject${num}`).style.left = `${hMove}px`;
          }
        }
        //Direction 2
        else if(dir == 2) {
          if (document.getElementById(`movingObject${num}`).style.top == "0px") {
            dir = 1;
            }
          else if (document.getElementById(`movingObject${num}`).style.left == `${document.documentElement.clientWidth-bSize}px`) {
            dir = 3;
          } else {
            vMove = vMove - 1;
            hMove = hMove + 1;
            document.getElementById(`movingObject${num}`).style.top = `${vMove}px`;
            document.getElementById(`movingObject${num}`).style.left = `${hMove}px`;
            }
        }
        //Direction 3
        else if (dir == 3) {
          if (document.getElementById(`movingObject${num}`).style.top == "0px") {
            dir = 4;
          }
          else if (document.getElementById(`movingObject${num}`).style.left == "0px") {
            dir = 2;
          } else {
            vMove = vMove - 1;
            hMove = hMove - 1;
            document.getElementById(`movingObject${num}`).style.top = `${vMove}px`;
            document.getElementById(`movingObject${num}`).style.left = `${hMove}px`;
          }
        }
        //Direction 4
        else if(dir == 4) {
          if (document.getElementById(`movingObject${num}`).style.top == `${document.documentElement.clientHeight-bSize}px`) {
            dir = 3;
          }
          else if (document.getElementById(`movingObject${num}`).style.left == "0px") {
            dir = 1;
          } else {
            vMove = vMove + 1;
            hMove = hMove - 1;
            document.getElementById(`movingObject${num}`).style.top = `${vMove}px`;
            document.getElementById(`movingObject${num}`).style.left = `${hMove}px`;
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

let wait = setInterval(createBall, 3000);



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

