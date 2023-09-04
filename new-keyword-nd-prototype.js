function multipleBy5(num){
    return num *5
}

multipleBy5.power = 78

// console.log(multipleBy5(5))
// console.log(multipleBy5.power)
// console.log(multipleBy5.prototype);

function createUser(username, scrore){
    this.username = username
    this.scrore = scrore
}

createUser.prototype.increment = function(){
     this.scrore++
    // console.log(`my score is : ${this.scrore++}`);
}

createUser.prototype.printMe = function(){
    console.log(`score is : ${this.scrore}`);
}

const result = new createUser("amruta", 259)
const res = new createUser("amit", 120)

// result.printMe()
// res.increment()

// Prototype

const myFruitsArr = ["mango","banana"]

let myObj = {
    username: "amruta",
    email: "amruta@gmail.com",
    age:29,

    getUserDetails: function(){
        console.log(`Here is my name ${this.username}`)
    }
}

Object.prototype.amruta = function(){
    console.log(`amruta is present in all objects`);
}

myObj.amruta();
myFruitsArr.amruta()

// so here we can access both array and object with prototype method "amruta" and this method we 
// create using Object
//  what if we create new method using Array lets check

Array.prototype.hiamruta = function(){
    console.log(`only present in array`);
}

// myObj.hiamruta()  // here we can not access hiamruta method because we create that method using array 
myFruitsArr.hiamruta()


// INHERITANCE

const User = {
    name : "amruta",
    email: "amruta@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__ : TeachingSupport   //  u can inherit using __proto__ in javascript
}

Teacher.__proto__ = User

// we can implement using modern syntax way

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiaurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"amruta".trueLength()
"amit".trueLength()
