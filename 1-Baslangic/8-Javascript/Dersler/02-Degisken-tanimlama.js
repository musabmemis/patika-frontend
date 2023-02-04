// ******** Let ve Const ile Değişken Tanımlama *******

// Var ile değişken tanmlamak:

// var serverName = "api.Kodluyoruz.org"
// console.log(serverName)

// let ile değişkeni boş tanımlamak:
let serverName;
console.log(serverName)

// let ile değişkene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile değişkene bilgi atayarak tanımlamak:
let password = "1234"
console.log(password)


// değişken ataması yapmadan önce kullanmaya çalışmak:
/* HATALI KULLANIM
let fullName = "Musab Memiş"
console.log(fullName)*/
let fullName = "Musab Memiş";

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:

fullName = "lorem ipsum dolor"
console.log(fullName)

// birleştirme veya ekleme işlemi:
fullName + "Yeni eklenen bilgi"
console.log(fullName+ " Test bilgisi") // Ekle ve göster yaptık amadeğişkene eklemedik

fullName= "Sıfırlandı"
fullName+= " ve yeni bilgi eklendi"
console.log(fullName)

// const ile değişkeni boş tanımlamaya çalışmak :( :
// const serverPassword; // Sadece değişkentanımlandı ama içi boş ??

// const ile değişken tanımlamak:
const SERVER_PASSWORD ="kshfdfjhldskj"
console.log(SERVER_PASSWORD )

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD )