// let pet = Array;
// pet[0].dog[name] = "Patani";

let pet = {};
pet.name = "Patani";

console.log(pet);

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

let arr = [1, 2, 3];
// Only change code below this line
function updateRecords(id, prop, value) {
  // if (collection[id].hasOwnProperty(prop)) {
  collection[id][prop] = value;
  console.log(collection);
  // }
  // else {
  //   collection[id].prop = value;
  // }
  console.log(typeof collection[2548].tracks);
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


// Template Literal
console.log(`Jesus Jesus Jesus
Friend Forever!`)

// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear()

// Use console.log() to print the outputOne variable
console.log(outputOne);