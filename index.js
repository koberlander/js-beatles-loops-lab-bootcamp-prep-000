// var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// function theBeatlesPlay(musician, instrument){
//   var list = [];
//   for (var i = 0; i <= 3; i++){
//     list.push(`${musician[i]} plays ${instrument[i]}`);
//   }
//   return list;
// }

// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

// function johnLennonFacts(facts){
//   var list = [];
//   var i = 0;
//   while (i <= 3){
//     list.push(`${facts[i]}!!!`);
//     i++;
//   }
//   return list;
// }

function iLoveTheBeatles(n){
 var list = [];
   function incrementVariable() {
  n += 1;
  }
  do {
    incrementVariable();
    list.push("I love the Beatles");
  } 
  while (n <= 14);
} 




