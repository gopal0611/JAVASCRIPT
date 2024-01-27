const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const  myTotal = myNums.reduce( (acc, curr) => acc + curr,0)


console.log(myTotal);

const shoppingCart = [
    {
        iteamNAme: "js-Course",
        price: 2999
    },
    {
        iteamNAme: "python",
        price: 599
    },
    {
        iteamNAme: "java",
        price: 5999
    },
]

const priceTOPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTOPay);