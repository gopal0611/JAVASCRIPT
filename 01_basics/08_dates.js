// Dates

let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleTimeString());
// console.log(typeof myDates);


// let myNewDate = new Date(2003, 5 , 11, 5, 6 )
let myNewDate = new Date("20023-05-04")
// console.log(myNewDate.toDateString()); 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let myDate = new Date()
console.log(myDate);
console.log(myDate.getHours());
console.log(myDate.getDay());
console.log(myDate.getMonth() + 1);



myNewDate.toLocaleString('default', {
    weekday:"long"
})