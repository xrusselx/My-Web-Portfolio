//Searching for good people.
let sentences = ["Hey! Your a good man Russel.", "This boy Roby is a bad boy.",
                  "Russel's brothers are good neighbors"];
let getWord;

for(i = 0;;i++) {
  if(sentences[i]!=null) {
    getWord = sentences[i].match("good");
    if(getWord!=null) {
      console.log(getWord.input);
    }
  }
  else { break; }
}
