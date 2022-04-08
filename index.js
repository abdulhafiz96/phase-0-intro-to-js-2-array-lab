// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
cats.push(name);
}
function destructivelyPrependCat(name) {
 cats.unshift(name);   
}
function destructivelyRemoveLastCat() {
 cats.pop();   
}
function destructivelyRemoveFirstCat() {
 cats.shift();   
}
function appendCat(name) {
 let copyCats = [...cats];
 copyCats.push(name);  
 return copyCats;
}
function prependCat(name) {
 let copyCats2 = [...cats]
    copyCats2.unshift(name);
 return copyCats2;   
}
function removeLastCat() {
 let copyCats3 = [...cats];
 copyCats3.pop();
 return copyCats3;   
}
function removeFirstCat() {
let copyCats4 = [...cats];
copyCats4.shift();
return copyCats4;    
}