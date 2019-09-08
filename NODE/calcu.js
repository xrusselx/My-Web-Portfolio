var output = "";  //The number that output on display
var firstNumber = 0;  //The number that you first input
var currentNumber = 0;  //The number that you last input
var sign = "";  //operator sign
var clearData; //Clear value(sign, numbers, output) when equal button was clicked.


//Problem: Pattern(Number-Equal-operator-plus-equal)
function one() {
    if (clearData == true) {clr();}
    output = output + 1;
    currentNumber = Number(output);
    document.getElementById("display").innerHTML = output;
    clearData = false;
}
function two() {
    if (clearData == true) {clr();}
    output = output + 2;
    currentNumber = Number(output);
    document.getElementById("display").innerHTML = output;
    clearData = false;
}
function plus() {
    sign = "+";
    if (clearData == true) {currentNumber = 0;}
    if (sign == "+") {
        firstNumber = firstNumber + currentNumber;
    } else if (sign == "-") {
        firstNumber = firstNumber - currentNumber;
    }
    currentNumber = 0;
    output = firstNumber;
    document.getElementById("display").innerHTML = output;
    output = "";
    clearData = false;
}
function subtract() {
    sign = "-";
    if (clearData == true) {currentNumber = 0;}
    if (sign == "+") {
        firstNumber = firstNumber + currentNumber;
    } else if (sign == "-") {
        firstNumber = firstNumber - currentNumber;
    }
    currentNumber = 0;
    output = firstNumber;
    document.getElementById("display").innerHTML = output;
    output = "";
    clearData = false;
}
function equal() {
    if (sign == "+") {
        firstNumber = firstNumber + currentNumber;
        output = firstNumber;
    } else if (sign == "-") {
        firstNumber = firstNumber - currentNumber;
        output = firstNumber;
    }
    document.getElementById("display").innerHTML = output;
    clearData = true;
}
function clr() {
    firstNumber = 0;
    currentNumber = 0;
    sign = "";
    output = "";
    document.getElementById("display").innerHTML = 0;
}