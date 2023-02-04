// ******** template literals kullanımı *********

let username = "musab"
const DOMAİN = "kodluyoruz.org"
let  email = username + "@" + DOMAİN
// console.log("Merhaba", username, "Sitemize Hoşgeldin", "mail adresin: ", email)

let info = ` 
merhaba ${ username } sitemize hoşgeldin..
mail adresin : ${email}
mail adresin  uzunluğu: ${email.length}
borcunuz: ${2+3*4}TL
günün saat bilgisi: ${new Date().getHours()}
kısa isminiz: ${username[0]}.   
` 

console.log(info)