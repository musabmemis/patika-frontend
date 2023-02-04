// ********** DOM içinden öğe seçimi ***********

let title = document.getElementById(`title`)
title.innerHTML= `Değişen Bilgi`
console.log(title.innerHTML)

let link = document.querySelector(`#kodluyoruzlink`)
link.innerHTML += ` değişti`
link.style.color = `red`
link.classList.add(`btn`)