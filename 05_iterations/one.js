// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5 ) {
        // console.log("5 is best no.");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`\n Table of: ${i} \n`);
   for (let j = 0; j <=10; j++) {
//   console.log(`Inner loop value ${j} and the inner loop is ${i}`);
    
// console.log(i + '*' + j + " = " + i*j);
   }
    
}


let myarr = ["flash", "batman", "superman"]
// console.log(myarr.length);

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if( index == 5){
        console.log(`Detected 5`);
        break 
    }
   console.log(`Value of i is ${index}`);
    
}