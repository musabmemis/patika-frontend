// *********** number ***********

// Number veri türü tanımalamak: 
let price = 100
let tax  = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
" Fiyat:",price,
"KDV oranı:", tax,
" KDV tutarı:",priceTax,
" Toplam fiyat:",total
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number constractor içine bilgi gönderildi: ", Number("111"))

// Artıtma ve ekleme işlemleri:

let counter=320
counter = counter+1
counter += 1
counter ++
console.log(counter)

counter --
counter -= 1;
console.log(counter)

counter *= 10
console.log(counter)

counter /= 2
console.log(counter)

// İşlem önceliği:

console.log(2+3*10)
console.log((2+3)*10)

// mod(kalan) alma %:
// Sayı tek mi çift mi öğrenme:

console.log( 14 % 2 ) // 0 ise çift 1 ise tek

// 8 Ürün alan koliye tüm ürünler sığıyor mu?
console.log("Koli kalan ürün örneği: ", 18 % 8 )

// üs alma **
console.log( 2*2*2*2)
console.log( 2**4)


// Aşağı yuvarlama işlemi -> Math.floor:
console.log( "Aşağı yuvarlama: ",Math.floor (1.9) )

// Yukarı yuvarlama işlemi -> Math.ceil:
console.log( "Yukarı yuvarlama: ",Math.ceil(1.6) )

// Yakına yuvarlama işlemi -> Math.round:
console.log("Yakına yuvarlama: ", Math.round(2.8))