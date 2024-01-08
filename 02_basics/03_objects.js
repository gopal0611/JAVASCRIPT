// singleton 
// object.creat

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Gopal",
   [mySym]: "key2",
    "full name": "Gopal Prasad",
    age: 20,
    location: "jaipur",
    email: "axz@gmail.com" ,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
    
}

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser.mySym);
