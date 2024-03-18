const usermethods = {
    about: function(){
    return `name is ${this.firstname} age is ${this.age}`
},
    is18: function(){
    return this.age >= 18;
}
}
function createuser(firstname,lastname,age,email,address,){
const user= Object.create(createuser.prototype);
user.firstname = firstname;
user.lastname = lastname;
user.age = age;
user.email = email;
user.address = address;
return user;
}
const user1 = createuser("akhil","mohan",20,"akhil@gmail.com","Odisha",)

createuser.prototype.about = function(){
    return `name is ${this.firstname} age is ${this.age}`
}

createuser.prototype.is18 = function(){
    return this.age >= 18;
}
//console.log(user1)
const meis18 = user1.is18()
console.log(meis18)
//console.log(createuser.prototype)