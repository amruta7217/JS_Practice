// Promises object represents the eventual completion or failure of asyncronus operation

// create promises
const promiseOne = new Promise(function(resolve,reject){ // craete prommise using "new" keyword
    // DO async task here  e.g. network calls,cryptography, Db calls

    setTimeout(function(){
        console.log("Async task completed");
        resolve()   // this resolved directly connected to the ".then"
    },1000)
})

promiseOne.then(function(){
    console.log("Promised consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async 2 task");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "amruta", email: "amruta@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Aayra", email: "aayra@gmail.com"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log("The promise either resolve or rejected"))

// Handle promise with async and await with try catch block

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JS", password: "1223"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const res = await promiseFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json()
}).then((data) => {
    console.log(data);
}).catch(error => console.log(error))