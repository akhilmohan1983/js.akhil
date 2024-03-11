function Arrayfind(array1,target){
for(let i=0;i<array1.length;i++){
if(array1[i]===target){
    return i;
}
}
return -1;
}
const myArray = [3,5,2,9];
let xy = Arrayfind(myArray,9);
console.log(xy);
function birthdaymsg(){
    console.log("Happy birthday");
}
birthdaymsg();

const akhilmohan = function(key1=2,key2=4){
    return key1+key2;
}
console.log(akhilmohan(2,3));

//arrow function
const isbirthday = () => {
    console.log("Happy birthday");
}
isbirthday();