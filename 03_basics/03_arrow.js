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

function chai(){
    let username= "Gopal"
    console.log(this.username);
}
chai()