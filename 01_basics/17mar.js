// function akme(hobby,music){
//     console.log("my name is", this.name,hobby,music)
// }
// const myinfo={
//     name: "Akhil",
//     Age:8,
// }
// const person={
//     name: "mohan",
//     Age:9,
// }
// //myinfo.about()
// const newfun = akme.bind(person,"badminton","strings");
// //console.log(result);
// newfun()
//.................................................................
//Arrow function does not have this
// const user1 ={
//     name:"Akhil",
//     Age:10,
//     about: () => {
//         console.log("My name is",this.name)
//        // console.log(this)
//     }
// }
// user1.about()
// const userme1 = {
// name:"Akhil",
// Age:10,
// email:"akhil@gmail.com",
// address: "Khordha,Odissa",
// about: function(){
// return `name is ${this.name} age is ${this.Age}`
// },
// is18: function(){
// return this.Age >= 18
// }
// }
//function to create object
//add key value pair
//return the object
// function createuser(firstname,lastname,age,email,address,){
// const user={};
// user.firstname = firstname;
// user.lastname = lastname;
// user.age = age;
// user.email = email;
// user.address = address;
// user.about = function(){
//     return `name is ${this.firstname} age is ${this.age}`
// };
// user.is18 = function(){
//     return this.age >= 18;
// }
// return user;
// }
// const user1 = createuser("akhil","mohan",20,"akhil@gmail.com","Odisha",)
// console.log(user1)
// const meis18 = user1.about()
// console.log(meis18)
const myuser1 = {
    key1: "Value1",
    key2:"Value2"
}
// const myuser2 = {
//     key3: "Value3",
//     key4:"Value4"
// }
//console.log(myuser1.key1)
const myuser2 = Object.create(myuser1)
    myuser2.key3 = "Value3"
    console.log(myuser2.key2)