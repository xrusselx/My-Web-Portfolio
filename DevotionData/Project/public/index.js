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

// var binary = "1101000";
// alert(parseInt(binary, 2));