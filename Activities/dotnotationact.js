//DOT NOTATION

//per line
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

//array
let down ="   |   |   \n   |   |   \n   |   |   "
let across= "------------";

array=[down, across, down, across, down];
console.log(array.join('\n'));


//loop
let line = 5

while (line > 0) {
    if (line == 4 || line == 2) {
        line -= 1;
        console.log("-----------");
    } else {
        line -= 1
        console.log("   |   |   \n   |   |   \n   |   |   ");
    }
}

