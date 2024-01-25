// function exampleFunction() {
//     if (true) {
//         var functionScopedVar = "I am function-scoped";
//     }
//     console.log(functionScopedVar);

// }  
// exampleFunction();
// console.log(functionScopedVar);

// var shadowedVar = "I am global";

// function exampleFunction(){
//     var shadowedVar = "I am local";
//     console.log(shadowedVar);
// }
// console.log(shadowedVar);



// console.log(x);
// console.log(x);


// let person = {
//     name: "prince",
//     age: 20,
//     isStudent: false
// };
// console.log(person);

// let fruits = [1, "banana", "orange"];
// console.log(fruits[2]);


// function add(a, b){
//     return a + b;
// }
// var a=add(2,3);
// console.log(a);

//dynamic typing

// let exampleVar = "Hello";
// console.log(typeof(exampleVar));

//type coercion

// let result = "2"%"2"%"2";
// console.log(result);


//working with operators

// let x = 5;
// let y = 2;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);

//comparison operators

// let x = 5;
// let y = 2;

// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x===y);
// console.log(x!==y);

//logical operator

// let p = true;
// let q = false;

// console.log(p&&q);
// console.log(p||q);
// console.log(!p);


//Assignment operator

// let num=10;
// num +=5;
// num -=3;
// num *=2;
// num /=4;
// console.log(num)/


//working with loops

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


//working with do while loop

// let count = 0;
// do {
//     console.log(count);
//     count++;

// }
// while (count <5);
// console.log(count);

//working with for in loop

// let person = { name:"john", age: 30, occupation: "Developer"};
// for (let key in person){
//     console.log(key + ": "+person[key]);
// }

//object constructor


// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
//     let book1 = new Book("This catcher in the Rye", "j.d.salinger", 1951);
//     let book2 = new Book("To kill a springbird", "Harper lee", 1960);
//     console.log(book1);
//     console.log(book2);


//slicing an array
// let index = ["apple, banana, mango"];
// let index1 = fruit.indexof("apple");
// for(let i=0;i<fruit.length; i++){
//     console.log(fruit[i]);
//     let remo=fruit.splice(1,"pear","melon");
//     let morefruit=["grape","pine"];
//     let fruit=fruit.concat(morefruit);
// }


//function expression

// const multiply = function(a, b){
//     return a * b;
// };

// const product = multiply(4, 6);
// console.log('Function Expression - Product:', product);

//Arrow Function

// const subtraction = (a,b) => a - b;
// const difference = subtraction(8, 3);
// console.log('Arrow Function - Difference:', difference);

//setTimeout Function

// const delayedFunction = () => {
//     console.log('Delayed function executed!');
// };

// setTimeout(delayedFunction,2000);

//setInterval function

// const repeatedFunction = () => {
//     console.log('Repeated function executed!');
// };

// const intervalId = setInterval(repeatedFunction,1000);
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval stopped.');
// },5);


//synchronous callback function example

// function parentFunction(name, callback){
//     callback();
//     console.log("Hey "+name);

// }
// function randomFunction(){
//     console.log("Hey Iam callbackfunction");
// }
// parentFunction("Random string",randomFunction);

//Asynchronus callback function example

// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);

// }
// function randomFunction(){
//     console.log("Hey Iam callbackfunction");
// }
// parentFunction("Random string",randomFunction);

//some code can also be written in this way anonymous function

function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);

}
parentFunction("Random string",function(){
    console.log("Hey Iam callbackfunction");
});