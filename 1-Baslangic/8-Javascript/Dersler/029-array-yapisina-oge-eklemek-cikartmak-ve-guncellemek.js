// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push

items.push(50)

console.log("50 : ", items)

// Array: basa oge eklemek -> unshift 

items.unshift(5)
console.log("5 : ", items)

// Array: sondaki ogeyi çıkarmak -> pop
let lastItem = items.pop() // son elemanı lastItem içerisine ekledik
console.log("lastItem", lastItem, "items", items)

// Array: bastaki ogeyi çıkarmak -> shift 

let firstItem = items.shift() // ilk elemanı firstItem içerisine ekledik
console.log("firstItem", firstItem, "items", items)

// Array içerisindeki bir öğenin bilgisinin değiştirilmesi -> ilk elemanın değiştirilmesi

items[0] = 5;
console.log(items)

// Array içerisindeki bir öğenin bilgisinin değiştirilmesi -> sonuncu elemanın değiştirilmesi

items[items.length-1] = 7
console.log(items)


