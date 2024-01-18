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
