// if

const isUserLoggedIn = true
const temprature = 41

if ( temprature === 40){
console.log(`less then 50`);
}else{
    // console.log(`temprature is greater then 50`);
}

// console.log("executed");
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}