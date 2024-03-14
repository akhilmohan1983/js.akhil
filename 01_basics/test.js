const personinfo = function(){
    console.log(`Person name is ${this.myname} and age is ${this.age}`)
}
const person1 ={
    myname: "Harsh",
    age:10,
    Gender:"male",
    about:personinfo   
}
const person2 ={
    myname: "Akhil",
    age:16,
    Gender:"male",
    about:personinfo   
}
const person3 ={
    myname: "Sahil",
    age:11,
    Gender:"male",
    about:personinfo   
}


person1.about();
person2.about();
//console.log(this.about)
