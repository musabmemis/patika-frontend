// array - dizilerle calismak

// Array olusturmak

let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray =[]      

// Array içindeki eleman/öğe sayısını öğrenme

console.log(items.length) 

// document.querySelector("#info").innerHTML =  items.length

// Array içindeki ilk elemanın çağrılması

console.log(items[0])

// Array içindeki son elemanın çağrılması

console.log(items[items.length - 1])

// Array içindeki son elemanın çağrılması

console.log(
    "ortadaki :",
    items [ Math.floor(items.length / 2 ) ]
)

// değişken içindeki bilginin array olup olmadığının kontrol edilmesi

console.log(typeof(items))

console.log(    
    Array.isArray(items)
)

// hangileri Array -> true verir? 

console.log("[] : ", Array.isArray([]) )
console.log("1 : ", Array.isArray(1) )
console.log("true : ", Array.isArray(true   ) )