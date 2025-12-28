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