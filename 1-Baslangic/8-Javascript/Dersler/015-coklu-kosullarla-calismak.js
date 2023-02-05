// *********** çoklu koşullarla çalışmak ***********

let username = prompt("adınızı giriniz:")
let age = prompt("yaşınız:")
let info = document.querySelector("#info")

if(username && age >= 18){
    info.innerHTML = "ehliyet alabilirsiniz"
} else if(!username){
    info.innerHTML = "isim bilgisi yok"
} else if(!(age >= 18)){
    info.innerHTML = "yaş bilgisi yok veya 18 yaşından küçüksünüz"
}