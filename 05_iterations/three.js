// for of

//   ["", "", ""]
//   [{}, {}, {}]

 const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// muObjects

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "INDIA")


// console.log(map);

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }