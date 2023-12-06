
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

// Find duplicates in both array
const arr = [1,2,3,4]
const arr1 = [1,3,6,7]

const final = arr.filter((i) => arr1.includes(i))

console.log(final)

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

// I want this type of output  {19: ['aaa', 'ccc'], 20: ['bbb', 'ddd']}

  const arr1 = [
    {name: 'aaa', age: 19},
    {name: 'bbb', age: 20},
    {name: 'ccc', age: 19},
    {name: 'ddd', age: 20}
  ]

  const output = arr1.reduce((result, current) => {
    const { age, name } = current;
    if (!result[age]) {
        result[age] = [];
    }
    result[age].push(name);
    return result;
}, {});

console.log(output)


// Want output like this {a: 2,m: 1,r: 1,t: 1,u: 1}

const str2 = "amruta"
const charCount = {}

function getCount(str){
	for(let i=0; i<str.length;i++){
		const char = str[i]
    charCount[char] = (charCount[char] || 0) + 1
  }
  return charCount
}

console.log(getCount(str2))

// string reverse  India is my country -----> "aidnI si ym yrtnuoc"


let str3 = "India is my country"

function reverseWord(str){
  
  const words = str.split(' ')
  
  const finalWord = words.map((word) =>
  	word.split('').reverse().join('')
  )
  
  const finalStr = finalWord.join(' ')
  console.log(finalStr)
}

reverseWord(str)

// write code for this

const calc = {
  total: 0,
  add(a) {
    this.total += a
    return this 
  },
  multiply(b) {
    this.total *= b
    return this 
  },
  substract(c) {
    this.total -= a
    return this 
  }
}

const result = calc.add(10).multiply(5).substract(30).add(10)
console.log(result.total)


// Polyfill for map

Array.prototype.myMap = function(cb){
  let temp = []

  for(let i =0;i<this.length;i++){
    temp.push(cb(this[i]))
  }
  return temp
}

const nums1 = [1,2,3,4]

const multiplyThree1 = nums.myMap((num) => {
  return num * 3
})

console.log(multiplyThree1)

// Polyfill for filter

Array.prototype.myFilter = function(cb){
  let temp = []

  for(let i =0;i<this.length;i++){
  if(cb(this[i])) temp.push(this[i])
  }
  return temp
} 

const nums = [1,2,3,4]

const multiplyThree = nums.myFilter((num) => {
  return num > 2
})

console.log(multiplyThree)
 




