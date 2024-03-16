// Normal Comparision with same data types
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);    // Data types will be converted in this. Must Avoid
// console.log("02" > 1);

console.log(null > 0);      
console.log(null == 0);
console.log(null >= 0);
// >, >=, <, <= works differently then ==. >, >=, <, <= converts null to 0, while == converts null to NaN.

//Avoid these 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===      // Compare the values as well as data types

console.log("2" === 2);