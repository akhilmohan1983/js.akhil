function createuser(firstname, age){
this.firstname = firstname
this.age = age
}
createuser.prototype.about = function(){
    console.log(this.firstname,this.age)
}
//new will create empty object this {}
//return the empty object
//autocreate - Object.create(createuser.prototype)
const user1 = new createuser("akhil",9);
//console.log(user1)
user1.about();