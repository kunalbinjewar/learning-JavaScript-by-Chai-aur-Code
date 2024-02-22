const accountId= 13334
// Const means value dosen't change when they declread
let accountEmiail= "binjewarkunal@gmail.com"
// Var and let value can be changed alwyas and if current value is suppose accountId is 345 and chnage with 543 so the value is update and disply with latest value.
var accountPassword="12344"
// accountId=2223
// console.log(accountId)
accountEmiail = "binjewarsujit@gmail.com"
accountPassword = "00988"
let accountState;
/*
variables declared but value not assign is called undefined.
*/

// console.log(accountPassword)
// console.table is use for showing data stores id easily in at the time multipley
console.table([accountEmiail, accountPassword, accountState]) 

/*
Prefer use of the let and const instead of var
Beacuase the issue in blocK scope and functional scope
*/

/* Note: Variables we can declared without using keywords
like example: accountId= "2345"
*/