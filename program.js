
var x = 7

function getName(){
    console.log("working");
}


// Find Duplicate in the array

const str = "aabbaabbccd"
const strconverttoarray = [...str]
const arr = [1,2,3,4,2,1,3,4]

function duplicate(arr){
    return arr.filter((val, index) => arr.indexOf(val) !== index ) 
}

// flatten array

const flatArr = [1,2,3,[4,5,[6]],7]

function flatternArr(arr){
    return arr.reduce((acc, curr) => 
        Array.isArray(curr)
        ? acc.concat(flatternArr(curr))
        : acc.concat(curr),
        []
    )
} 

// {amruta:1,arti:2}

const users = [
    {firstName: "amruta",lastName: "bhaije", age:29},
    {firstName: "amit",lastName: "bhaije", age:32},
    {firstName: "aayra",lastName: "bhaije", age:1},
    {firstName: "karan",lastName: "adsul", age:29}
]

const getAgeNumber = users.reduce(function(acc, curr){
    if(acc[curr.age] > 1){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {})

// maximum number in an array

const maxNumber = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr
    }
    return acc
}, 0) 

//  sum(2)(3)

function sum(a){
    return function add(b){
        return function cal(c){
            return a+b+c
        }
        
    }
}

console.log(sum(2)(3)(2))


// text = "abc" count = 7 output = "abcabca"

function getStr(text, count){
    return text.repeat(count/3)+text.substring(0, count%3)
}

console.log(getStr('abc', 6))

// Flatten Object: Expected output ---->> 1,2,3,4,5

let tree = {
    value: 1,
    children: [{
        value: 2,
        children: [{
          value: 3
        }]
      },
      {
        value: 4,
        children: [{
          value: 5
        }]
      }
    ]
  };
  
  function getTreeValues(node) {
      console.log(node.value)
    if(node.children){
        for(const i of node.children){
          getTreeValues(i)
      }
    }
  }
  
  getTreeValues(tree) 
 




