// const add = function(a,b){
//     return a+b;
// }
// console.log(add(2, 3)); 

//Arrow functions 
const add =(a,b)=>{
return a+b;
}
const square =x=>x*x;
console.log(square(232));

function normalFunc() {
  console.log(arguments); 
}
normalFunc(1, 2, 3);


const arrowFunc = (args) => console.log(args);
arrowFunc(1,2,2)

const greet =(name)=>{return "Hello "+name}
console.log(greet("Sheetal"))

const numbers = [1,3,5,6,3,2];
const doubleArr = numbers.map(x=>2*x);
console.log(doubleArr)

const odd = doubleArr.filter(findOdd)
function findOdd(x){
    if(x%2!=0){
        return x;
    }
}
console.log(odd);

function sum(total,num){
    return total+num;
}
let totalSum = doubleArr.reduce(sum,0);
console.log(totalSum)

const createUser = (name, age) => ({ name, age });
console.log(createUser("Sheetal",12))

const users = ["Ravi","Harry","Nikita"];
users.forEach(users=>console.log(users))

const multiplyBy=factor=>num=>num*factor;

const double = multiplyBy(2);
console.log(double(3))

console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(4)); // 12
