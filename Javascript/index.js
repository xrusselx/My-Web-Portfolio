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
  console.log(typeof arr);
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
