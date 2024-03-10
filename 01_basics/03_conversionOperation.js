let score = 33

console.log(typeof score);
console.log(typeof (score));

let point = "55"

console.log(typeof point);

let valueInNumber = Number(point)
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);