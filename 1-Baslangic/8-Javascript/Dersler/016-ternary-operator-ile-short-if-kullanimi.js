// ************** ternary operatör ile shoert if kullanımı ************

// eğer kullanıcı adın varsa yadır yoksa kullanıcı biginiz bulunamadı yaz

let userName = prompt("kullanıcı adınızı giriniz")
let info = document.querySelector("#info")

// ternary kullanımı
// koşul ? doğruysa : yanlışsa

info.innerHTML = `${userName ? userName : "kullanıcı bilginiz bulunamadı :("}   `



