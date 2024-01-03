// primitive

// 7 types : String, Number, Boolean, null, undefine, Symbol, BigInt

// js is dynamic type language

const score = 1002;
const scoreValue = 65.1;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("163");
const anotherId = Symbol("163");

console.log(id === anotherId);

const bigNum = 5646546498216841n;

//  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "maagraj", "doga"];

let myObj = {
  name: "gopal",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof heros);

// ******************************************************************************

// Stack (Primitive), Heap (Non Primitive)

let myYt = "legendgamer";

let anotherName = myYt;
anotherName = "Kamlesh ";

console.log(anotherName);
console.log(myYt);

let userOne = {
  email: "asdf@gmail.com",
  upi: "283hsdhak@oksbi",
};

let userTwo = userOne

userTwo.email = "user1243@kk.com";

console.log(userOne.email);
console.log(userTwo.email);
