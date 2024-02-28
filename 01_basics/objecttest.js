//const person={name:"Akhil",age:36};
// console.log(person);
//console.log(typeof person);
//console.log(person.name);
//console.log(person.age);
const key = "email";
const person = {
name:"Akhil",
age:32,
hobbies:["Badminton","music","Cricket"]
}
person.gender = "Male";
person[key] = "akhil@test.com"
//console.log(person)
//for in loop
//object.keys loop
//for(let key1 in person){
//console.log(`my personal data ${key1} is ${person[key1]}`)
//}
//console.log(Object.keys(person))
for(let ams in person){
    console.log(person[ams]);
}
