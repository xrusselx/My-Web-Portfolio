
var turn = 1;
var checkedTurn = 0;
var answerTurn = -1;
var score = 0;

const question = [
    "1. Who is the Savior of the world?",
    "2. What nation was called by God to make himself known to the world?",
    "3. How many are the tribes of Israel?",
    "4. Who is the top apostle and leader of the early church?",
    "5. Who among the 12 apostle died lastly?"
];
const answer = [
    "Jesus Christ",
    "Israel",
    12,
    "Apostle Peter",
    "Apostle John"
]
const choices = [["none", "none", "none", "none"],
    ["Mohammed", "Budha", "Confucius", "Jesus Christ"],
    ["Rome", "Canaan", "Israel", "Phillipines"],
    [10, 11, 12, 13],
    ["Apostle Paul", "Benny Hinn", "Apostle Peter", "Reinhard Bonnke"],
    ["Apostle John", "Apostle Peter", "Reinhard Bonnke", "Marthin Luther"]
]

var firstRadioButton = document.getElementById("a");
var secondRadioButton = document.getElementById("b");
var thirdRadioButton = document.getElementById("c");
var fourthRadioButton = document.getElementById("d");

function start() {
    if (checkedTurn <= question.length-1) {
    document.getElementById("question").innerHTML = question[checkedTurn];
    document.getElementById("a").value = choices[checkedTurn][0];
    document.getElementById("a1").innerHTML = ` ${choices[turn][0]}`;
    document.getElementById("b").value = choices[checkedTurn][1];
    document.getElementById("b1").innerHTML = ` ${choices[turn][1]}`;
    document.getElementById("c").value = choices[checkedTurn][2];
    document.getElementById("c1").innerHTML = ` ${choices[turn][2]}`;
    document.getElementById("d").value = choices[checkedTurn][3];
    document.getElementById("d1").innerHTML = ` ${choices[turn][3]}`;
    document.getElementById("hideShow").hidden = false;
    if(document.getElementById("a").checked) {
        if(document.getElementById("a").value == answer[answerTurn]) {
            score++;
            document.getElementById("a").checked = false;
        }
    } else if(document.getElementById('b').checked) {
        if(document.getElementById('b').value == answer[answerTurn]) {
            score++;
            document.getElementById("b").checked = false;
        }
    } else if(document.getElementById('c').checked) {
        if(document.getElementById('c').value == answer[answerTurn]) {
            score++;
            document.getElementById("c").checked = false;
        }
    } else if(document.getElementById('d').checked) {
        if(document.getElementById('d').value == answer[answerTurn]) {
            score++;
            document.getElementById("d").checked = false;
        }
    }
    turn++;
    checkedTurn++;
    answerTurn++;
    document.getElementById("start").innerHTML = "NEXT";
    console.log(score);
    }
    else {
        document.getElementById("a").value = choices[checkedTurn][0];
        document.getElementById("b").value = choices[checkedTurn][1];
        document.getElementById("c").value = choices[checkedTurn][2];
        document.getElementById("d").value = choices[checkedTurn][3];
        if(document.getElementById('a').checked) {
            if(document.getElementById('a').value == answer[answerTurn]) {
                score++;
            }
        } else if(document.getElementById('b').checked) {
            if(document.getElementById('b').value == answer[answerTurn]) {
                score++;
            }
        } else if(document.getElementById('c').checked) {
            if(document.getElementById('c').value == answer[answerTurn]) {
                score++;
            }
        } else if(document.getElementById('d').checked) {
            if(document.getElementById('d').value == answer[answerTurn]) {
                score++;
            }
        }
        console.log(score);
        document.getElementById("firstDiv").style = "color: white; text-align: center;"
        if (score == 5) {
        document.getElementById("firstDiv").innerHTML = `Congratulations your score is: ${score} :D`
        } else if (score > 2) {
        document.getElementById("firstDiv").innerHTML = `Great your score is: ${score} :)`
        } else if (score > -1) {
            document.getElementById("firstDiv").innerHTML = `Do Better your score is: ${score} :(`
        }
    }
}

// console.log(document.getElementById('a').value);
