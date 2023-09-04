const user = {
    userName: "Amruta",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        console.log("inside fun", this.userName)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log("outside",this)

function User(userName, loginCount, signIn){
    this.userName = userName,
    this.loginCount = loginCount,
    this.signIn = signIn

    this.greetings = function() {
        console.log("5555555555",this.userName)
    }

    return this   // its not imp you can remove also
}

const userOne = new User("amit", 9, true)
const userTwo = new User("aayra", 7, false)
console.log(userOne.constructor)
// console.log(userTwo)