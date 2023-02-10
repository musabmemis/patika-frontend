// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length)
console.log(items[0][0])

// Array içerisinden öğe ayırmak -> splice(pos, item ?)

let newItems = items.splice(1,5)

console.log("newItems: ", newItems)
console.log("items: " ,items)

// Array içerisindeki öğenin index bilgisini bulmak --> indexOf('value')

items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

// Array kopyalamak -->slice, [....ES6  ]

let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyItems: ", copyItems)
console.log("items: ", items)


console.log("Kopyalandıktan sonraki hali : ")
copyItems = items.slice()   // kopyalama yaptı
copyItems.pop()
console.log("copyItems: ", copyItems)
console.log("items: ", items)  

let es6Items = [...items]
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array içerisindeki bilgiyi string' e çevirmek -> toString, join

console.log(allUsers.toString())
console.log(allUsers.join("  --- "))


// istediğimiz index bilgisine öğe eklemek -> splice(index, 0,  value)

allUsers.splice(allUsers.length-1, 0, "melisa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)