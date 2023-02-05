// ******** Mantıksal operatörler ve karşılaştırma  operatörleri ********

let price = "100"
let user = "musab"

// == Eşitse

console.log( "==: ", price == 1) // false
console.log( "==: ", price == 100) // true

// === Hem değeri hem türü eşitse

console.log( "===: ", price === 1) // false
console.log( "===: ", price === 100) // false
console.log( "===: ", price === "100") // true

// != Eşit değilse

console.log(user != "guest") // true

// < Küçükse

console.log("price < 100: ",price < 100 ) // false

// <= Küçükse ve eşitse

console.log("price <= 100: ",price <= 100 ) // true

// > Büyükse

console.log("price > 200: ",price > 200 )

// > Büyükse ve eşitse

console.log("price >= 100: ",price < 100 )

// && ve

console.log(price && user != "guest") // true

price = 0
console.log(price >0 && user != "guest") // false

// || veya

console.log(price >0 || user != "guest") // false

// ! tersi

price = 1
user = "guest"
console.log((price >0 && user == "guest")) // true
console.log(!(price >0 && user == "guest")) // false

console.log(!!2)