/*closure
const createCounter=function(n){
    let count =n;
    return function(){
        return count++; 
    };
};
let counter=createCounter(10);
console.log(counter());//10
console.log(counter());//11
console.log(counter());//12
*/
//Counters-using OOP(creating constructors)
class Counter{
    constructor(n){
        this.n=n;

    }
    increment(){
       
        return this.n++;
    }
}
const counter = new Counter(10);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
