// ***********  String veri türü işlemleri **********

let email = "musabmemis@gmail.com"
let firstName = "musab"
let lastName  =  "MEMIS"

// string karakter sayısı -> length

console.log(  email.length )

// İlk karakterini bulmak ->[0]

console.log(firstName[3])
console.log(firstName.charAt(4))

// büyük harf / küçük harf :
firstName = firstName.toUpperCase()
console.log(firstName)
firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak ve bulmak -> search

console.log(email.search("@"))
console.log(email[10])
email.search("olmayan") // -1

// belli bir yere kadar al -> slice : (domain bilgisi)

let DOMAİN = email.slice(email.search("@")+1)
console.log(DOMAİN)

console.log(
    DOMAİN.slice(0, DOMAİN.indexOf(`.`)) // sadece gmail kısmını aldık
)

// bilgiyi değiştir -> replace:

email = email.replace(`gmail.com`, `kodluyoruz.org`)
console.log(email)

// istediğim bilgi var mı -> includes :

email.includes(`uhhkj`) // false
email.includes(`@`) // true
console.log(email)

// istediğim bilgiyle başladı mı? bitti mi? -> endsWith, startsWith :

console.log(email.endsWith(`kodluyoruz.org`))
console.log(email.startsWith(`musab`))

// ilk harflerini büyük yapmak :
firstName = "FİRST"
lastName = "LAST"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()} `
console.log(fullName)
