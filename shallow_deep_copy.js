// copy object

let profile = {
    name: "amruta"
}

let user = profile
user.name = "amit"

// console.log(profile)

/* when we copied object to a new varible it will copy a memory (reference) so parent value
also change  and user also change */

// Shallow copy

/* so if we want don't want to change parent object value so we have 2 soutions for that
    Object.assign and spread operator 
*/ 

// let bio = {
//     name: "amruta"
// }

// let person = Object.assign({}, bio)
// person.name = "amit"
// console.log(bio)
// console.log(person)

// let bio = {
//     name: "amruta"
// }

// let person = {...bio}
// person.name = "amit"
// console.log(bio)
// console.log(person)

// Deep copy

let bio = {
    name: "amruta",
    address: {
        city: "Pune",
        pincode: "411019" 
    }
}

// let person = {...bio}  // it will not work in deep copy deep copy means it will check your nested object.

let person = JSON.parse(JSON.stringify(bio))
person.address.city = "chinchwad"
console.log(bio)
console.log(person)

