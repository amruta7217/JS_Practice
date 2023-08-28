// Map

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num + 10)

const newNums = myNums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40)
// console.log(newNums)

//  Reduce

const myNo = [1,2,3]
// const sum = myNo.reduce( function(acc, currVal){
//     console.log(`accumalator ${acc} - current val ${currVal}`)
//     return acc + currVal
// }, 0)

const sum = myNo.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(sum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(total)