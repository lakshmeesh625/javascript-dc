const myArray = [];

myArray[0] = "Prometheus1";

myArray[1] = "Prometheus";
myArray[2] = "Anduril";
myArray[3] = true;
myArray[4] = 0;
console.log(myArray);


let myArray1 = ["Apple", "Bannana", "orange", "Guava"];

myArray1.push("JackFruit")

console.log(myArray1);


myArray1.unshift("Watermelon");

console.log(myArray1);


myArray1.shift();

console.log(myArray1);


myArray1.pop();

console.log(myArray1);


myArray1[1] = "Mango";

console.log(myArray1);



myArray1.splice(2, 0, "Viabhav");

console.log(myArray1);

myArray1.splice(3, 3, "axar", "hardik", "krunal");

console.log(myArray1);





let mensUpper = ["Hoodie", "sweatshirt", "Jumper", "T shirt"];
let mensLower = ["sweatpants", "jeanspants", "shorts", "tights"];


let womenupper = ["reversehoodie", "reversesweatshirt", "reversejumper", "reversetshirt"];
let womensLower = ["reversesweatpants", "reversejeanspants", "reverseshorts", "reversetights"];

let mensComplete = [mensUpper, mensLower];
console.log(mensComplete);


console.log(mensComplete[0][1]);

let menComplete2 = [...mensUpper, ...mensLower]
console.log(menComplete2);


