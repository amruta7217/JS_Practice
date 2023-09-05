function setUserName(userName){
    this.userName = userName
    console.log("called", userName);
}

function createUserName(userName, email, password){
    setUserName.call(this, userName)

    this.email = email
    this.password = password
}

const result = new createUserName("John", "john@fb.com", "1244")
console.log(result);