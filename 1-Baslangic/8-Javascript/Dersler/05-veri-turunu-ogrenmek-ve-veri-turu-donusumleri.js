// Veri Turunu Ogrenmek ve veri turu donusumleri

// veri türünü öğrenmek typeof:
let price = 111
let strinPrice = "111"
let hasPassword = true  

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "strinPrice: ",
    typeof(strinPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

// string(metinsel) bilgileri int ve float'a dönüştürmek
let number1 = "11"
number1 = parseInt(number1)
console.log( "number1: ", number1, typeof(number1))

let number2 = "12px"
number2 = parseInt(number2)
console.log( "number2: ", number2, typeof(number2))

let number3 = "13.1"
number3 = Number(number3)
console.log( "number3: ", number3, typeof(number3))

let number4 = "11.4 px"
number4 = parseFloat(number4)
console.log( "number4: ", number4, typeof(number4))

// number veri tipinden string'e dönüştürmek

let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5))
