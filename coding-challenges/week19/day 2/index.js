//Find the time complexity of following operation in javascript. Show them using examples and explain their complexity.

//indexOf
const beasts = ['ant', 'bison', 'camel', 'duck'];

console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('ant'));
console.log(beasts.indexOf('giraffe'));


//push
const animals = ['pigs', 'goats', 'sheep','lion'];

const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);

//pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato','potato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants);

//shift
const array1 = [5,1, 2, 3, 4];
const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);

//splice

const months = ['Jan', 'March', 'April', 'June','july','aug'];
months.splice(4, 6, 'Feb');
console.log(months);
months.splice(3, 2, 'May');
console.log(months);

//concat

const array1 = ['a', 'b', 'c','g'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
