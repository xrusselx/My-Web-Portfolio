// document.getElementById("output").innerHTML = "This is the moment!";

function sum() {
  let x = 2;
  let a = 0;
  while(a = x) {
    if (a == x) {
      return a;
    }
    a++;
  };
}
console.log(sum());

// How to save Data without database - use localStorage
let a = 0;

function clickCounter() {
  localStorage.setItem("numberOfClicks",
                        Number(localStorage.getItem("numberOfClicks")) + 1);
}

function startCounter() {
  localStorage.setItem("numberOfClicks", a);
}

function showClickedData() {
  console.log(localStorage.getItem("numberOfClicks"));
}


// Binary to String
// Freecode Camp
// function binaryAgent(str) {
//   return String.fromCharCode(
//     ...str.split(" ").map(function(char) {
//       return parseInt(char, 2);
//     })
//   );
// }

function binaryAgent(str) {
  return str
    .split(" ")
    .map((element) => {
    return String.fromCharCode(parseInt(element, 2));
    })
    .join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 \
00100000 01100010 01101111 01101110 01100110 01101001 \
01110010 01100101 01110011 00100000 01100110 01110101 \
01101110 00100001 00111111"));


// Everything Be True
function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let i = 0; i <= collection.length - 1; i++) {
    if (!collection[i].hasOwnProperty(pre)) return false;
    if (collection[i][pre] == 0 || collection[i][pre] === null) return false;
    if (collection[i][pre] === undefined || isNaN(collection[i][pre]) &&
        typeof collection[i][pre] != "string")
    {
      return false;
    }
    if (i == collection.length - 1) return true;
  }
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
{"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"},
{"user": "Po", "sex": "female"}], "sex"));


// Arguments Optional
function addTogether(x, y) {
  if (y === null || typeof x == "string" || typeof y == "string" ||
      typeof y == "object")
  {
    return undefined;
  }
  if (y == undefined) {
    return function sumTwoAnd(z) {
      if (typeof z == "object") return undefined
      return x + z;
    }
  }
  else return x + y;
}

console.log(addTogether(2,3));
console.log(addTogether(2)([3]));


// Make a person
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };
  this.setFirstName = function(first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
    // firstAndLast = firstAndLast.split(" ");  // My Answer
    // firstAndLast[0] = first;
    // firstAndLast = firstAndLast.join(" ");
  };
  this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last;
    // firstAndLast = firstAndLast.split(" ");  // My Answer
    // firstAndLast[1] = last;
    // firstAndLast = firstAndLast.join(" ");
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);
// console.log(bob.setFirstName("Russel"));
// console.log(bob.getFullName());



// Map the Debris
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
    arr.map(element => {
      element.avgAlt = Math.round(2 * (Math.PI) *
        Math.sqrt((Math.pow(((element["avgAlt"]) + (earthRadius)), 3) / GM)));
      element['orbitalPeriod'] = element['avgAlt'];
      delete element['avgAlt'];
    });
    return arr;

  // return Math.round(2 * (Math.PI) * Math.sqrt((Math.pow(((arr[0]["avgAlt"]) +
  //         (earthRadius)), 3) / GM)));
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6},
        {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));