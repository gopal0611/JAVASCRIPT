function sayMyName() {
  console.log("G");
  console.log("O");
  console.log("P");
  console.log("A");
  console.log("L");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumber(3, 2);
// console.log(`Result= ${result}`);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Plese enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("Gopal"));
// console.log(loginUserMessage("Gopal"));



function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Gopal",
  price: 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 99
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800,1000]));