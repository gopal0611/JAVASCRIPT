// var c = 300
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
//   console.log("Inner: ", a);
}

// console.log(a)
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log("Outer: ", a);
// console.log(b);
// console.log(c);


function one(){
    const userName = "Gopal"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()


if(true) {
    const username = "Gopal"
    if (username === "Gopal") {
        const website = " youtube"
        // console.log(username + website );
    }
// console.log(website);

}

// console.log(username)


// ++++++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
 return num + 1
}


const addTwo = function(num){
    return num + 2

}
addTwo(5)