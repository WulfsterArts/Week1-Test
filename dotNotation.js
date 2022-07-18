console.log("hello world".toUpperCase());
console.log((Math.random()*100).toFixed(0));
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(Math.random()*10));
console.log(Math.round(Math.random()*10));

console.log('   |    |   ');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('------------');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('------------');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('   |    |   ');

let down ="   |   |   \n   |   |   \n   |   |   "
let across= "------------";

array=[down, across, down, across, down];
console.log(array.join('\n'));



var line = 5

while (line > 0) {
    if (line == 4 || line == 2) {
        line -= 1;
        console.log("-----------");
    } else {
        line -= 1
        console.log("   |   |   \n   |   |   \n   |   |   ");
    }
}