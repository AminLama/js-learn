const accountId = 1223
let accountEmail = "aminnulama@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu" // can be used but recommend not to
let accountState;

// accountId = 2 //not allowed

accountEmail = "amin.lama@thamescollege.edu.np"
accountPassword = "9876"
accountCity = "Bhaktapur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])