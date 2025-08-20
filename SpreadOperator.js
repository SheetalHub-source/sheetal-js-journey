const arr =[1,2,4,56,4,3,5];
console.log(...arr);

const nums1 = [1,2,3,4,5];
const nums2 = [6,7,8,9];

const nums = [...nums1,...nums2];
console.log(nums)

const users = {
    name:"Sheetal",
    age:34
};
const city = {
    city:"Bhopal"
}
const newUser= {
    ...users,...city
}
console.log(newUser);
function sum (a,b,c){
    return a+b+c;
}
console.log(sum(...nums));


//Rest operator 
function logAll(...args){
console.log(args);
}
logAll(1,2,3,4,5,6,6)

function multiply(multiplier,...nums){
    return nums.map((x)=>x*multiplier);
}
console.log(2,(1,3,4,4,3,2));

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  
console.log(second); 
console.log(rest);   

const state = {
  user: { name: "Sheetal", age: 22 },
  theme: "dark"
};

const newState = {
  ...state,
  user: { ...state.user, age: 23 }
};

console.log(newState);


