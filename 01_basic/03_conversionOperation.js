let score ="33abc"
//kabhi kabhi esa hota h ki aap typeof kr rhe ho aur wh number 
//batayega pr wh hoga nhi number isliye achha se check kr lo
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0;
let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false
//"hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


let value = 3
let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " Vikash"
let str3 = str1 + str2
console.log(str3)// output= hello Vikash

console.log("1" + 2);//output = 12
console.log(1 + "2");//output = 12
console.log("1" + 2 + 2);//output = 122
console.log(1 + 2 + "2");//output = 32

console.log(true);//output = true
console.log(+true); //output = 1
console.log(+""); //output = 0
//but this not write formate 
//this is not the correct way to write it

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.