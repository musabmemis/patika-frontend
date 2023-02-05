// ************ Koşullarla çalışmak *************

let username = prompt("Kullanıcı adınızı giriniz:")

// Kullanıcı bigisi varsa ekrana ismini yazdır
// eger (username.length > 0) {console.log(username)} değilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

if (username.length > 0) { // if kısmı herzaman true ise çalışır
    console.log(`Kullanıcı bilginiz ${username}`)
   } else {
    console.log("bilgi yok")
    }
    

