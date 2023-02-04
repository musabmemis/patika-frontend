// ******* boleon veri türü ile çalışmak ********

// 0 ve 1'i Anlamak ->

let isActive  = false // 0
isActive= true
console.log(isActive)

let userName;
let isUserName = Boolean(userName )

console.log(isUserName)

userName= "user"
console.log("user name: ",Boolean(userName)) // Boolean iççinde veri varsa true , yoksa false

// 0, -0, null, false, NaN, undefined, ("") ->
Boolean(0) // false

Boolean(-0) // false

Boolean(-0.1) // true

Boolean(0===0) // true

// karar yapıları kısmında tekrar edilecek
Boolean(userName.length > 0) // true


