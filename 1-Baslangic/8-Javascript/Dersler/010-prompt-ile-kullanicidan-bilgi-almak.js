// ********** prompt ile kullanicidan bilgi almak ***********

let fullName = prompt("Lütfen adınızı giriniz: ")

let greeting = document.querySelector(`#greeting`)

greeting.innerHTML = `${greeting.innerHTML} <small style= "color:red">${fullName}</small>`