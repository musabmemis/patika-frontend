// ********* css class eklemek veya çıkarmak *********

let greeting = document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")

greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class ekleme

greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silme

console.log(greeting.classList)