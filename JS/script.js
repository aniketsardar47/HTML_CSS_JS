// var a = 0;

// while(a != 10){
//     console.log("Hello");
//     a++;
// }

// for(let i=0;i<=10;i++){
//     console.log("Hello");
// }

// let x = (n)=>{
//     return n*n;
// }

// let c = x(2);

// console.log(c);

// let arr = [1,2,3,4,5,6,7,8,9];

// let sum = 0;

// arr.forEach(function(val){
//     sum = sum+val;
// })

// console.log(sum);

// let obj = {
//     name: "Aniket",
//     age: 5,
//     gender: "Male",
//     isMarried: false
// };
 
// console.log(this)

//This keyword in 
//Global - Window
//Local - Window
//Func inside function (ES5) - Window - With Normal Function
//Func inside functon (ES6) - Object  - With Arrow Function
//Inside Constructor - New Blank Object
//Event Listner - That element in which the listener is attached

    // document.querySelector("button").addEventListener("click", function(){
    //     console.log(this);
    // })

// Call Apply and Bind - This are the keyword which are used to call the functions by taking it as object
// var obj = {
//     name:"Aniket"
// }

// function func(){
//     console.log(this);
// }

// func.call(obj);

//Apply keyword is used when the funnction is using parameters
// function func(a,b,c)
// ...
// func.apply(obj,[1,3,4]) - we pass the parameters as a array

//Bind ia just like call but it does not run the function but it returns sone value which can be runned later
// var ret = func.bind(obj);
// ret()


//Prototypal Inheritance
// function makeHuman(name,age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.chacha = 12;

// const human1 = new makeHuman("Jack", 14);
// const human2 = new makeHuman("Jones", 16);

//Closures  -   A Function which returns another Function, And use Parent Function Variable
// function abcd(){
//     var a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// let x = abcd();
// x();

// function timer(){
//     var a = 12;
//     return setTimeout(function(){
//         console.log(a);
//     },2000)
// }

// var ans  = timer();


//Event Deligation  -   When we handle multiple events of the elements

// document.querySelector("#parent");

// parent.addEventListener("click", function(event){
//     if(event.target.id == "play"){
//         console.log("Playing");
//     }
//     else if(event.target.id == "pause"){
//         console.log("Paused");
//     }
// })

//Higher order Functions
// let arr = [1,2,3,4,5,6,7];

// arr.forEach(function(){}) - In this the forEach is the Higher order Function which is accepting a another funtions

//Try - Catch

// function div(a,b){
//     try{
//         if(b==0)
//             throw Error("Divide by zero error");
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// div(12,0)
 
//JS Custom Events
    // Steps
    // 1. Create Evnet
// let evt = new Event("eventa");
    // 2. Add Event to The Element
// document.querySelector("button")
// .addEventListener("eventa", function(){
//     alert("Event Occured!!");
// })
    // 3. Call the Event
// document.querySelector("button").dispatchEvent(evt);

