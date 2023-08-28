// IIFE

(function(){
    // console.log("normal function")
})();

(() => {
    // console.log("arrow function")
})()

// ForEach   does not return anything

// const coding = ["js","java","ruby","c++","python"]

// const values = coding.forEach( (item) => {
//     console.log(item)
// } )

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newVal = myNums.filter((num) => num > 4)
// console.log(newVal)
const newVal = myNums.filter((num) => {
    return num > 4   // when we used {} we need to return that value
})

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newVal)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBook = books.filter((book) => book.genre === "History")
  const userBook = books.filter((book) => book.publish >= 2000)
  console.log(userBook)




