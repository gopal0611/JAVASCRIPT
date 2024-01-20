const user = {
    username: "Gopal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
     
} 

// user.welcomeMessage() 
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "Gopal"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username= "Gopal"
//     console.log(this.username);
// }



const chai = () => {
    let username= "Gopal"
    console.log(this.username);
}
// chai()

// ************************ arrow function ************************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(2,4));