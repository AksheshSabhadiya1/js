
/* Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */


// 1) 1st way
// let calculator = {

//     read(){
//         let a=prompt("Enter a:")
//         let b=prompt("Enter b:")
        
//         alert("sum:"+this.sum(a,b));
//         alert("mul:"+this.mul(a,b));
//     },

//     sum(a,b){
//         return +a + +b
//     },

//     mul(a,b){
//         return a*b
//     }
// }

// calculator.read()   




// 2) 2nd way
// let calculator = {
//     read(){
//         this.a = +prompt("Enter a:",0)
//         this.b = +prompt("Enter b:",0)
//     },

//     sum(){
//         return this.a + this.b
//     },

//     mul(){
//         return this.a * this.b
//     }
// }

// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())









// let obj={}

// function A(){
//     return obj
// }
// function B(){
//     return obj
// }

// let a = new A
// let b = new B

// console.log(a==b);                // true











// function Calculator(){

//     this.read = function(){
//         this.a = +prompt("Enter a:")
//         this.b = +prompt("Enter b:")
//     }

//     this.sum = function(){
//         return this.a + this.b
//     }

//     this.mul = function(){
//         return this.a * this.b
//     }
// }

// let calculator = new Calculator();
// calculator.read();
// console.log( "Sum :" + calculator.sum() );
// console.log( "Mul :" + calculator.mul() );









/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value
*/

// function Accumulator(startingValue){

//     this.value=startingValue
//     this.read = function() {
//         this.value += +prompt("Enter value:")
//     }
// }

// let accumulator = new Accumulator(1)

// accumulator.read()
// accumulator.read()
// console.log(accumulator.value);






//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. The function must be case-insensitive:

// function checkSpam(str){
    
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes("xxx") || lowerStr.includes("viagra")
// }

// console.log( checkSpam('buy ViAgRA now') )
// console.log( checkSpam('free xxxxx') )
// console.log(checkSpam("innocent rabbit"))






//Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength 

// function truncate(str, maxlength){

//     let len = str.length

//     return len > maxlength ? str.slice(0,maxlength+1) + '...' : str
// }

// console.log( truncate("What I'd like to tell on this topic is:", 20))
// console.log(truncate("Hi everyone!", 20))







// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

// function extractCurrencyValue(str){

//     return +str.slice(1)
// }

// console.log(extractCurrencyValue("$120") == 120)








/*
1) Create an array styles with items “Jazz” and “Blues”.
2) Append “Rock-n-Roll” to the end.
3) Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
4) Strip off the first value of the array and show it.
5) Prepend Rap and Reggae to the array.

*/

// let styles = ["Jazz","Blues"]
// console.log(styles.toString())

// styles.push("Rock-n-Roll")
// console.log(styles.toString())

// styles[Math.floor((styles.length-1)/2)] = 'classes'
// console.log(styles.toString())

// styles.shift()
// console.log(styles.toString())

// styles.unshift("Rap","Reggae")
// console.log(styles.toString())







// function getMaxSubSum(arr){
//     let maxsum=0
//     let tempsum=0

//     for(let key of arr){
//         tempsum += key
//         maxsum = Math.max(maxsum,tempsum)

//         if(tempsum < 0)
//             tempsum = 0 
//     }

//     return maxsum
// }

// console.log(getMaxSubSum([-1, 2, 3, -9]))
// console.log(getMaxSubSum([2, -1, 2, 3, -9]))
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
// console.log(getMaxSubSum([-2, -1, 1, 2]))
// console.log(getMaxSubSum([100, -9, 2, -3, 5]))
// console.log(getMaxSubSum([1, 2, 3]))








// show only last 2 digit from mobile number
// let str = '8799327858'
// let arr = str.split('')
// arr.fill('*',0,str.length-2)
// let newArr = arr.join('')
// console.log(newArr);







// let str = '8799327858'
// let arr = str.split('')
// console.log(arr.map(item => item++));                   // [ 8,7,9,9,3,2,7,8,5,8]







// let armyCamp = {
//     minAge : 18,
//     maxAge : 27,

//     canJoin(user){
//         return user.age >= this.minAge && user.age < this.maxAge
//     }
// }

// let users = [
//     { age : 21},
//     { age : 11},
//     { age : 26},
//     { age : 32},
//     { age : 2},
// ]

// let soldier = users.filter((user)=> armyCamp.canJoin(user))
// console.log(soldier);









//  Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. 
//  That is: removes all dashes, each word after dash becomes uppercased.

// function camelize(str){

//     return str.split('-').map((item,index)=> index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('')

// }

// console.log(camelize("my-short-string"));










/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/

// function filterRange(arr,a,b){
    
//     return arr.filter((item) => item >= a && item <=b )
     
// }

// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr,1,4));







/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

// 1) first way
// function filterRangeInPlace(arr, a, b){

//     arr.splice(0,arr.length, ...arr.filter((item) => item >=a && item<=b))
// }

// let arr = [5,3,8,1]
// filterRangeInPlace(arr, 1, 4)
// console.log(arr);


// 2) second way
// function filterRangeInPlace(arr,a,b){

//     for(let i in arr){
//         let val = arr[i]

//         if(val < a || val > b){
//             arr.splice(i,1)
//             i--
//         }
//     }
// }

// let arr = [5,3,8,1]
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);








// sort in decreasing order
// let arr = [5, 2, 1, -10, 8];

// arr.sort().reverse()
// console.log(arr);

// arr.sort((a,b) => b-a)
// console.log(arr);








/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/

// 1st way

// function copySorted(arr){
    
    //     let newArr = [...arr]
    //     return newArr.sort()
    
    // }
    
    // let arr = ["HTML", "JavaScript", "CSS"]
    // let sorted = copySorted(arr)
    // console.log(arr);
    // console.log(sorted);



// 2nd way

// function copySorted(arr){
//     return arr.slice().sort()
// }

// let arr = ["HTML", "JavaScript", "CSS"]
// let sorted = copySorted(arr)
// console.log(arr);
// console.log(sorted);






/*
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((item)=>item.name)

// console.log(( names ));






/*
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname
*/

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((item) => ({ fullName : `${item.name} ${item.surname}`, id : item.id}))

// console.log(usersMapped);








/*
    Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/

// function sortByAge(users){
//     // return users.map((item) => item.age).sort()
//     return users.sort((a,b) => (a.age - b.age))
    
// }

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 28 }

// let arr = [ pete, john, mary ]

// console.log(sortByAge(arr))
// console.log((arr[0].name))
// console.log((arr[1].name))
// console.log((arr[2].name))






/*
    Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
*/
// function shuffle(arr){
//    console.log(arr.sort(() => Math.random() - 0.5))
// }

// let arr = [1, 2, 3]
// shuffle(arr)







/*
    Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

    The formula for the average is (age1 + age2 + ... + ageN) / N.
*/

// function getAverageAge(users){
//     return users.reduce((sum,item) => sum + item.age,0)/users.length
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log(getAverageAge(arr));







/*
Create a function unique(arr) that should return an array with unique items of arr.
*/

// function unique(arr){

//     let newArr = []

//     for(let key of arr){

//         if(!newArr.includes(key)){
//             newArr.push(key)
//         }
//     }
//     return newArr
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// console.log(unique(strings));









/*
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
*/

// function groupById(arr){
//     return arr.reduce((obj,item) => {
//         obj[item.id] = item;
//         return obj
//     },{})
// }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
  
// let usersById = groupById(users);
// console.log(usersById);










/*
Create a function unique(arr) that should return an array with unique items of arr
*/

// let arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

// function unique(arr){
//     return Array.from(new Set(arr))
// }

// console.log(unique(arr));









/*
Filter Anagrams   :- Anagrams are words that have the same number of same letters, but in different order.
Write a function aclean(arr) that returns an array cleaned from anagrams.
*/

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr){

//     let map = new Map()

//     for(let key of arr){
//         let sorted = key.toLowerCase().split('').sort().join('')

//         map.set(sorted, key)
//     }
//     return Array.from(map.values())
// }   

// console.log(aclean(arr));








/*
we have user object,
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)

*/

// let user ={
//     name : 'john',
//     year : 30
// }

// let {
//     name,
//     year : age,
//     isAdmin = false
// } = user

// console.log(name);
// console.log(age);
// console.log(isAdmin);









/*
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.

*/

//1st way
// let salaries ={
//     john : 100,
//     pete : 300,
//     mary : 250,
// }

// function topSalary(salaries){
//     let maxSalary = 0
//     let maxName = null

//     for(const [name, salary] of Object.entries(salaries)){
//         if(maxSalary < salary){
//             maxSalary = salary
//             maxName = name
//         }
//     }
//     console.log(maxName)
// }

// topSalary(salaries)


// 2nd way
// let salaries ={
//     john : 100,
//     pete : 300,
//     mary : 250,
// }

// function topSalary(salaries){
//     let maxSalary = 0
//     let maxName = null

//     for(const key in salaries){

//         const [name, salary] = [key, salaries[key]]

//         if(salary > maxSalary){
//             maxSalary = salary
//             maxName = name
//         }
//     }

//     return maxName
// }

// console.log(topSalary(salaries));









/*
Turn the user into JSON and then read it back into another variable.
*/

// let user = {
//     name: "John Smith",
//     age: 35
// };

// console.log(JSON.stringify(user,null,2));






/*
Write replacer function to stringify everything, but remove properties that reference meetup.
*/

// let room = {
//     number: 23
// };
  
// let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
// };
  
// room.occupiedBy = meetup;
// meetup.self = meetup;
  
// console.log(( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value                // In replacer first call,  key is empty and value is present 
// },2)));







/*
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

Make 3 solution variants:
Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
*/

// function sum(num){

    // for loop
    // let sum = 0
    // for(let i=0; i<=num; i++){
    //     sum += i
    // }
    // return sum


    // recursion 
    // if(num == 1){
    //     return 1
    // }
    // return num + sum(num-1)


    // arithmatic logic
    // return num * (num - 1) /2 
// }

// console.log(sum(5))







/*
find Factorial
*/

// function fact(num){

//    // if(num == 1) return 1
//    //return num * fact(num-1)

//     return num ? num * fact(num-1) : 1

//     // return (num != 1) ? num * fact(num-1) : 1
// }
// console.log(fact(5))







/*
find fibonacci numbers
*/

// function fib(num){
//     return num<=1 ? num : fib(num-1) + fib(num-2)

//     // let a=1,b=1
//     // for(let i=3; i<=num; i++){
//     //     let c=a+b
//     //     a=b
//     //     b=c
//     // }
//     // return b

// }

// console.log(fib(7));







/*
Write a function printList(list) that outputs list items one-by-one.
Make two variants of the solution: using a loop and using recursion.
*/

// function printList(list){

//     //for loop
// //     let temp=list
// //     while(temp){
// //         console.log(temp.value);
// //         temp = temp.next
// //     }

//     // using recursion
//     console.log(list.value);
//     if(list.next){
//         printList(list.next)
//     }
// }

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

// printList(list)








/*
Output a single-linked list from the previous task Output a single-linked list in the reverse order.
*/

// let list = {
//         value: 1,
//         next: {
//           value: 2,
//           next: {
//             value: 3,
//             next: {
//               value: 4,
//               next: null
//             }
//         }
//     }
// }

// function printList(list){

    // using loop
    // let temp=list
    // let arr=[]
    // while(temp){
    //     arr.push(temp.value)
    //     temp=temp.next
    // }
    // for(let i=arr.length-1; i>=0; i--){
    //     console.log(arr[i]);
    // }


    // using recursion
//     if(list.next){
//         printList(list.next)
//     }
//     console.log(list.value);
// }

// printList(list)









/*
Write function sum that works like this: sum(a)(b) = a+b.
*/
// function sum(a){

//     return function(b) {
//         return a+b 
//     }
// }

// console.log(sum(1)(2));         //For the second parentheses to work, the first ones must return a function
// console.log(sum(3)(4));








/*
Modify the code of makeCounter() so that the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
*/

// function makeCounter() {
//     let count = 0;
  
//     function counter() {
//       return count++;
//     }
  
//     counter.set = value => count = value;
  
//     counter.decrease = () => count--;
  
//     return counter;
//   }

//   let counter = makeCounter()

//   console.log("current count : ",counter())
//   console.log("current count : ",counter.set(5))
//   console.log("current count : ",counter())
//   console.log("current count : ",counter.decrease())
//   console.log("current count : ",counter())






// let start = Date.now()
// let time = []

// setTimeout(function timer(){
//     time.push(Date.now() - start)

//     if(start + 100 < Date.now()){
//         console.log(time);
//     }
//     else{
//         setTimeout(timer)
//     }
// })







/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/



// Using setInterval.
// function printNumbers(from, to){
//     let current = from
//     let time = setInterval(function() {
//         console.log(current);

//         if(current == to){
//             clearInterval(time)
//         }
        
//         current++
//     },2000)
// }

// printNumbers(5,10)




// Using nested setTimeout.
// function printNumbers(from,to){
//     let current = from

//     setTimeout(function time(){
//         console.log(current);

//         if(current < to){
//             setTimeout(time,2000)
//         }
//         current++
//     },1000)
// }

// printNumbers(5,10)








/*
write a function and find out current age of user
*/

// function UserData(name,birthday){
//     this.name = name
//     this.birthday = birthday

//     Object.defineProperty(this, "age" ,{
//         get(){
//             let todayYear = new Date().getFullYear()
//             return todayYear - this.birthday.getFullYear()
//         }
//     })
// }

// let newuser = new User ('john', new Date(2003,11,6))

// console.log(newuser.name);
// console.log(newuser.birthday);
// console.log(newuser.age);









/*
make a Coffee machine which includes private fixWaterAmount method , getter & setter method, waterlimit by using class
*/

// class CoffeeMachine{

//     #waterLimit = 200

//     #fixWaterLimit(value){
//         if(value < 0) return 0
//         return (value > this.#waterLimit) ? value : this.#waterLimit
//     }

//     setWaterLimit(value){
//         this.#waterLimit = this.#fixWaterLimit(value)
//         console.log("Done");
//     }

//     getWaterLimit(){
//         return this.#waterLimit
//     }
// }

// let coffemachine = new CoffeeMachine()
// coffemachine.setWaterLimit(500)
// console.log(coffemachine.getWaterLimit());










/*
Task1   :-Waiting for a Timeout
*/

// let promise = new Promise( (resolve, reject) =>{
//     setTimeout(function(){
//         console.log("Hello");
//     },2000)

//     // setInterval(timer,2000)
//     // function timer(){
//     //     console.log("Hello baka");
//     // }
// })

// promise.then(
//     function(value) { console.log(value);},
//     function(error) { console.log(error);}
// )









// async function loadjson(url){

//     let response = await fetch(url)

//     if(response.status == 200){
//         let json = await response.json()
//         return json
//     }

//     throw new Error(response.status)
// }

// let url = 'script.json'
// loadjson(url).catch(error => alert(error))          //Error : 404









/*  We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?
*/

// async function wait(){
//     await new Promise((resolve) => setTimeout(resolve("Akshu"),1000))
//     return 10
// }

// function f(){
    
//     wait().then(result => console.log(result))
//     wait().then(alert)
// }

// f()











/*
create table which contain fields like name, email and mobileNo also user enter data to be store on it and insert two button edit and delete to perform each task
*/








