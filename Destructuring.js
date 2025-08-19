//Basic Array Distructuring
const array = [1,2,3,4,5];
const [a,b,c]=array;
console.log(a);
console.log(b);
console.log(c);

//Skipping elements 
const[first,,third]=array;
console.log(first);
console.log(third);

//Default values
const[defaultVal=22,second,,fourth=50,,sixth=100]=array;
console.log(defaultVal);//it is replaced because in array value is present for this variable(taken from arr)
console.log(second);
console.log(fourth);
console.log(sixth);//this is default value 

//swapping variable = Easiest way to swap variable without needing temporary varible
let p=1,q=2;
console.log(`Before swapping the value of the p is ${p} and the value of q is ${q}`);
[p,q]=[q,p];
console.log(`After swapping the value of the p is ${p} and the value of q is ${q}`);

//Object Destructuring
const user = {
    name:"Ravi",
    age:23,
    city:"Bhopal"
}
const{name,age}=user;
console.log(name,age);
