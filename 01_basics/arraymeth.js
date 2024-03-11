const numb=[1,2,3,4,5]
function multipl(number, index){
//console.log(number*2)
console.log(`index is ${index} and value is ${number*2}`)
}
// for(let i=0;i<numb.length;i++){
//     //console.log(`index is ${i}`)
//     //console.log(numb[i]*2)
//     multipl(numb[i],i)
// }
numb.forEach(multipl)