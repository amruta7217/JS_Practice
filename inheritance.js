class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`A new course was added in ${this.username}`);
    }
}

const teacherRes = new Teacher("Kavita", "k@gmail.com", "123")
teacherRes.addCourse()
teacherRes.logMe()

const userRes = new User("Javascript")
userRes.logMe()
// userRes.addCourse()  // we can not access child class methods

console.log(teacherRes instanceof User);
console.log(userRes instanceof Teacher);