// singleton
// object.creat

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Gopal",
  [mySym]: "myKey1",
  "full name": "Gopal Prasad",
  age: 20,
  location: "jaipur",
  email: "axz@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "gopal1234@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "gopal1234@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS users");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
