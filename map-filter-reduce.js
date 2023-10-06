const arr = [5, 1, 3, 2, 6]

const double = arr.map(function(x){
    return x * 2
})

const triple = arr.map((x) => {
    return x * 3
})

const binary = arr.map((x) => {
    return x.toString(2)
})

const greter = arr.filter((x) => {
    if(x > 3) return x
})

const isOdd = arr.filter((x) => {
    if(x % 2) return x
})

const isEven = arr.filter((x) => {
    if(x % 2 == 0) return x
})

// console.log(isEven);

function findMax(){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

const maxNumber = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr
    }
    return acc
}, 0) 

// console.log(maxNumber)

const users = [
    {firstName: "amruta",lastName: "bhaije", age:29},
    {firstName: "amit",lastName: "bhaije", age:32},
    {firstName: "aayra",lastName: "bhaije", age:1},
    {firstName: "karan",lastName: "adsul", age:29}
]

const getList = users.map((x) => {
    return x.firstName + " " + x.lastName
})

const getAgeNumber = users.reduce(function(acc, curr){
    if(acc[curr.age] > 1){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {})

const filterName = users.filter((x) => x.age > 20).map((x) => x.firstName)

const output = users.reduce(function(acc, val){
    if(val.age > 20){
        acc.push(val.firstName)
    }
    return acc
}, [])

// console.log(filterName)

// call apply and bind

const fullname = function(hometown, state){
    console.log(this.fname + " " + this.lname + " " + hometown + "," + state)
}

let name = {
    fname:"amruta",
    lname:"bhaije",
    // fullname: function(){
    //     console.log(this.fname + " " + this.lname)
    // }
}

let name2 = {
    fname:"amit",
    lname:"bhaije"
}

// name.fullname.call(name2)

fullname.call(name, "pune","mh")
fullname.call(name2, "kokan", "mh")
// name.fullname()

// Apply
fullname.apply(name2, ["kokan", "mh"])

// bind ===> keep the copy of the method and return the function
const printMyName = fullname.bind(name2, "kokan", "mh")
console.log(printMyName)
printMyName()






