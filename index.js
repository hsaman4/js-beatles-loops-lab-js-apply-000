// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let x=0;x < musicians.length; x++){
    var string = `${musicians[x]} plays ${instruments[x]}`;
    arr.push(string);
  }
  return arr; 
}

function johnLennonFacts () {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ] ; 
  var newOne = []; 
  var x = 0 ;
while (x < facts.length)
  newOne.push(facts [x] + "!!!") ;
  x++
return newOne; 
}

function iLoveTheBeatles (number) {
  
}