//Palindrome
function palindrome(str) {
  str = document.getElementById('givenString').value;
  let palindromeVal = "";
  let ans = document.getElementById('palindromeAnswer');

  //Change 'val' to 'str' to use str parameter
  str = str.toLowerCase().split("")
  .filter((elem) => (/^[0-9a-zA-Z]+$/.test(elem)))
  .join("");
  palindromeVal = str.split("")
  .reverse().join("");
  if (str != "" && str == palindromeVal) {
    console.log(true);
    ans.innerHTML = "The String is a Palindrome.";
    return true;
  } else {
    console.log(false);
    ans.innerHTML = "The String is NOT a Palindrome.";
    return false;
  }
}

console.log(palindrome('eye'));


//Roman Numeral Converter
function convertToRoman(val) {
  val =  document.getElementById('numberField').value;
  let convertedNum = document.getElementById('convertedNum');
  let i = 1;

  // console.log(val);
  if (val == "") {
    convertedNum.innerHTML = "Enter a Value above Zero";
    return convertedNum.innerHTML;
  }  else if (val > 3999) {
    convertedNum.innerHTML = "The number must below 4000";
    return convertedNum.innerHTML;
  }
  convertedNum.innerHTML = val.toString().split("").reverse().map((element) => {
    if (i == 1) {
      i++;
      if (element == 1) return 'I';
      else if (element == 2) return 'II';
      else if (element == 3) return 'III';
      else if (element == 4) return 'IV';
      else if (element == 5) return 'V';
      else if (element == 6) return 'VI';
      else if (element == 7) return 'VII';
      else if (element == 8) return 'VIII';
      else if (element == 9) return 'IX';
    }
    else if (i == 2) {
      i++;
      if (element == 1) return 'X';
      else if (element == 2) return 'XX';
      else if (element == 3) return 'XXX';
      else if (element == 4) return 'XL';
      else if (element == 5) return 'L';
      else if (element == 6) return 'LX';
      else if (element == 7) return 'LXX';
      else if (element == 8) return 'LXXX';
      else if (element == 9) return 'XC';
    }
    else if (i == 3) {
      i++;
      if (element == 1) return 'C';
      else if (element == 2) return 'CC';
      else if (element == 3) return 'CCC';
      else if (element == 4) return 'CD';
      else if (element == 5) return 'D';
      else if (element == 6) return 'DC';
      else if (element == 7) return 'DCC';
      else if (element == 8) return 'DCCC';
      else if (element == 9) return 'CM';
    }
    else if (i == 4) {
      i++;
      if (element == 1) return 'M';
      else if (element == 2) return 'MM';
      else if (element == 3) return 'MMM';
    }
    }
  ).reverse().join("");

  return convertedNum.innerHTML;
}

console.log(convertToRoman());


// CAESARS CIPHER DECODER
// function rot13(str) {
//   str =  document.getElementById('encodedString').value;
//   let decodedString = document.getElementById('decodedString');
//   let i = 1;
//   let letterMeaning = {A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T',
//         H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z', N: 'A', O: 'B', P: 'C',
//         Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L',
//         Z: 'M'};

//   decodedString.innerHTML = str.split('').map(element => {
//     if (/\d/.test(element)) return;
//     else if (/\W/.test(element)) return element;
//     element = element.toUpperCase();
//     return letterMeaning[element]; 
//   })
//   .join('')
//   return decodedString.innerHTML;
// }

function rot13(str) {
  str =  document.getElementById('encodedString').value;
  let decodedString = document.getElementById('decodedString');
  decodedString.innerHTML = str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );

  return decodedString.innerHTML;
}

console.log(rot13("SERR PBQR PNZC"));


// Telephone Number Validator
// Solution 1
// function telephoneCheck(num) {
//   num =  document.getElementById('telNumber').value;
//   let numberConfirmation = document.getElementById('numberConfirmation');
//   let i = 0;
//   let countNum = num.split('').filter((elem) => /\d/.test(elem));
//   numberConfirmation.innerHTML = true;

//   if (countNum.length == 10 && num.length == 10) {
//     num.split('').reverse().forEach(element => {
//       if (!(/\d/.test(element))) {
//         numberConfirmation.innerHTML = false;
//       }
//     })
//   } else if (countNum.length == 10 && num.length == 12) {
//     num.split('').reverse().forEach(element => {
//       i = i+1;
//       if (i < 5 && !(/\d/.test(element)) ||
//           i == 5 && !(/[-\s]/.test(element)) ||
//           i <= 8 && i > 5 && !(/\d/.test(element)) ||
//           i == 9 && !(/[-\s]/.test(element)) ||
//           i <= 12 && i > 9 && !(/\d/.test(element))) {
//         numberConfirmation.innerHTML = false;
//       }
//     }) 
//   } else if (countNum.length == 11 && countNum[0] == 1 && /[)(]/.test(num) &&
//               num.length == 14) {
//     num.split('').reverse().forEach(element => {
//       i = i+1;
//       if (i < 5 && !(/\d/.test(element)) ||
//           i == 5 && !(/-/.test(element)) ||
//           i <= 8 && i > 5 && !(/\d/.test(element)) ||
//           i == 9 && !(/\)/.test(element)) ||
//           i <= 12 && i > 9 && !(/\d/.test(element)) ||
//           i  == 13 && !(/\(/.test(element))){
//         numberConfirmation.innerHTML = false;
//         console.log('hey');
//       }
//     })
//   } else if (countNum.length == 11 && countNum[0] == 1 && num.length == 14) {
//     num.split('').reverse().forEach(element => {
//         i = i+1;
//         if (i < 5 && !(/\d/.test(element)) ||
//             i == 5 && !(/[-\s]/.test(element)) ||
//             i <= 8 && i > 5 && !(/\d/.test(element)) ||
//             i == 9 && !(/[)-\s]/.test(element)) ||
//             i <= 12 && i > 9 && !(/\d/.test(element)) ||
//             i  == 13 && !(/[(\s]/.test(element))){
//           numberConfirmation.innerHTML = false;
//           console.log(num[0]);
//         }
//     })
//   } else if (countNum.length == 10 && num.length == 13) {
//     num.split('').reverse().forEach(element => {
//       i = i+1;
//       if (i < 5 && !(/\d/.test(element)) ||
//           i == 5 && !(/-/.test(element)) ||
//           i <= 8 && i > 5 && !(/\d/.test(element)) ||
//           i == 9 && !(/\)/.test(element)) ||
//           i <= 12 && i > 9 && !(/\d/.test(element)) ||
//           i  == 13 && !(/\(/.test(element))){
//         numberConfirmation.innerHTML = false;
//       }
//     })
//   } else if (countNum.length == 10 && num.length == 14) {
//     num.split('').reverse().forEach(element => {
//       i = i+1;
//       if (i < 5 && !(/\d/.test(element)) ||
//           i == 5 && !(/-/.test(element)) ||
//           i <= 8 && i > 5 && !(/\d/.test(element)) ||
//           i == 9 && !(/\s/.test(element)) ||
//           i == 10 && !(/\)/.test(element)) ||
//           i <= 13 && i > 10 && !(/\d/.test(element)) ||
//           i  == 14 && !(/\(/.test(element))){
//         numberConfirmation.innerHTML = false;
//       }
//     })
//   } else if (countNum.length == 11 && countNum[0] == 1 && num.length == 16) {
//     console.log('hey');
//     num.split('').reverse().forEach(element => {
//       i = i+1;
//       if (i < 5 && !(/\d/.test(element)) ||
//           i == 5 && !(/-/.test(element)) ||
//           i <= 8 && i > 5 && !(/\d/.test(element)) ||
//           i == 9 && !(/\s/.test(element)) ||
//           i == 10 && !(/\)/.test(element)) ||
//           i <= 13 && i > 10 && !(/\d/.test(element)) ||
//           i  == 14 && !(/\(/.test(element)) ||
//           i == 15 && !(/\s/.test(element))){
//         numberConfirmation.innerHTML = false;
//       }
//     })
//   }
//   else if (countNum.length == 11 && countNum[0] == 1 && num.length == 14) {
//     num.split('').reverse().forEach(element => {
//       i = i+1;
//       if (i < 5 && !(/\d/.test(element)) ||
//           i == 5 && !(/-/.test(element)) ||
//           i <= 8 && i > 5 && !(/\d/.test(element)) ||
//           i == 9 && !(/\)/.test(element)) ||
//           i <= 12 && i > 9 && !(/\d/.test(element)) ||
//           i  == 13 && !(/\(/.test(element))){
//         numberConfirmation.innerHTML = false;
//       }
//     })
//   }
//   else numberConfirmation.innerHTML = false;
//   return numberConfirmation.innerHTML;
// }

// Solution 2 - Using Only RegEx

function telephoneCheck(num) {
  num =  document.getElementById('telNumber').value;
  let numberConfirmation = document.getElementById('numberConfirmation');

  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  numberConfirmation.innerHTML = regex.test(num);

  return numberConfirmation.innerHTML;
}


console.log(telephoneCheck("555-555-5555"));


// Cash Register
function checkCashRegister(price, cash, cid) {
  let ccid = JSON.parse(JSON.stringify(cid));;
  let cashInDrawer = 0;
  let change = cash - price;

  //Get the Sum of Cash in Drawer
  for (let i = 0; i <= cid.length - 1; i++) {
    cashInDrawer += cid[i][1];
  }
  cashInDrawer = cashInDrawer.toFixed(2);
  // change = change.toFixed(2);

  //Status of Cash in Drawer
  if (cashInDrawer < change) {
    console.log(cashInDrawer);
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cashInDrawer == change) {
    return {status: "CLOSED", change: cid};
  } else {
    for (; change > 0;) {
      if (cid[8][1] >= 100 && change - 100 >= 0) { //Check if there is 100  cash in
        change -= 100;              //cid and if the change is greater than 100
        cid[8][1] -= 100;
        // change = change.toFixed(2);
      } else if (cid[7][1] >= 20 && change - 20 >= 0) {
        change -= 20;
        cid[7][1] -= 20;
        // change = change.toFixed(2);
      }  else if (cid[6][1] >= 10 && change - 10 >= 0) {
        change -= 10;
        cid[6][1] -= 10;
        // change = change.toFixed(2);
      }  else if (cid[5][1] >= 5 && change - 5 >= 0) {
        change -= 5;
        cid[5][1] -= 5;
        // change = change.toFixed(2);
      }  else if (cid[4][1] >= 1 && change - 1 >= 0) {
        change -= 1;
        cid[4][1] -= 1;
        // change = change.toFixed(2);
      }  else if (cid[3][1] >= 0.25 && change - 0.25 >= 0) {
        change -= 0.25;
        cid[3][1] -= 0.25;
        change = change.toFixed(2);
        cid[3][1] = cid[3][1].toFixed(2);
      }  else if (cid[2][1] >= 0.1 && change - 0.1 >= 0) {
        change -= 0.1;
        cid[2][1] -= 0.1;
        change = change.toFixed(2);
        cid[2][1] = cid[2][1].toFixed(1);
      }  else if (cid[1][1] >= 0.05 && change - 0.05 >= 0) {
        change -= 0.05;
        cid[1][1] -= 0.05;
        change = change.toFixed(2);
        cid[1][1] = cid[1][1].toFixed(2);
      }  else if (cid[0][1] >= 0.01 && change - 0.01 >= 0) {
        change -= 0.01;
        cid[0][1] -= 0.01;
        change = change.toFixed(2);
        cid[0][1] = cid[0][1].toFixed(2);
      } else {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    }
  }

  ccid = ccid.map((elem, index) => [elem[0], elem[1] - cid[index][1]])
             .filter((elem) => elem[1] != 0)
             .map((elem) => {
              if (elem[1].toString().length > 6) {
                return  [elem[0], parseFloat(elem[1].toFixed(2))];
              } else return [elem[0], elem[1]];
             })

  ccid = ccid.reverse();
  return {status: "OPEN", change: ccid};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],
      ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
      ["TWENTY", 60], ["ONE HUNDRED", 100]]));
      // Should return {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05],
      ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
      ["TWENTY", 60], ["ONE HUNDRED", 100]]));