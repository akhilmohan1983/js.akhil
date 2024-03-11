let fruits = ["apple","mango","pinaple","banana"]
for(let i =0;i<=fruits.length-1; i++){
//console.log(fruits[i])
}
let fruits2=[]
for(let i =0;i<=fruits.length-1; i++){
    fruits2.push(fruits[i])
}
//console.log(fruits2)
console.log(fruits)
let [fruits3,fruits4,...fruits5]=fruits
//console.log(fruits3)
console.log(fruits4)