// ************* liste icindeki ogeye ulasmak veya yeni eleman eklemek **********

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öğe değişti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk  öğe değişti"

let ulDOM = document.querySelector("ul#list")
let liDOM =  document.createElement(`li`)

liDOM.innerHTML = "Kendi oluşturduğumuz öğe"

// ulDOM.append(liDOM) -> en sona ekler

ulDOM.prepend(liDOM)