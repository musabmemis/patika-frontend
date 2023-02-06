// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName = "Lorem"

function greetings(firstName = "", lastName = "") { // default paarametre alıyor..
    // console.log(`merhaba ${firstName ? firstName : ""}`)
    console.log(`merhaba  ${firstName} ${lastName}`)
    console.log(`merhaba  ${firstName} ${lastName}`)

}
console.log(firstName) // değişken
greetings() //fonkksiyona parametre gçöndermedik
greetings("parametre")

function greetings2(firstName, lastName){
    let info = `merhaba ${firstName} ${lastName}`
    return info
}

let greetingsinfo = greetings2("ad", "soyad")
// let info = ""deneme // ???
console.log(greetingsinfo)

function domIdWriteInfo (id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}
let idInfo = `<span style = "float:right; color:aqua"> hahahahah </span>`
let htmlInfo = `<span> style = "color:red"> color REDD </span>`
domIdWriteInfo(`greeting`, htmlInfo)
domIdWriteInfo(`info`, idInfo)
domIdWriteInfo(`in`, greetings2("bir", "iki"))


