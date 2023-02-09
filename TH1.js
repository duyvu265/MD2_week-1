// const
//  cars1 = {
//     BrAnd: "BMW",
//     color: "red"
// };
// const cars2 = {
//     Brand :"Nissam",
//     color: "Blue",
//     year: 2004
// };
// const cars3 = {...cars1,...cars2}
// console.log(cars3);
//
// {
// }
//
// const car="AUDI";
// const a=[...car];
// console.log(a)


const number=[1,2,3,4,5,6,7];
const [a,b,c,...end]=number;
console.log(a);
console.log(b);
console.log(c);
console.log(end);