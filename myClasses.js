// after ES6 class has introduced

class User {
    constructor(userName, email, password){
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptedPass(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const response = new User("amruta", "amruta@gmail.com", "123")
console.log(response);
console.log(response.encryptedPass());
console.log(response.changeUserName());

// If we don't have class the what we do behind the scence

function User(userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.encryptedPass = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const res = new User("amruta", "amruta@gmail.com", "123")
console.log(res);
console.log(res.encryptedPass());
console.log(res.changeUserName());