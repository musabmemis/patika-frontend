let listDOM = document.querySelector("ul#list");
listDOM.addEventListener("click", listDone);

function listDone(event) {
  event.target.classList.toggle("checked");
}

let myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

const idTask = document.querySelector("#task");

function newElement() {
  if (idTask.value) {
    addItem(idTask.value);
    idTask.value = "";
    console.log("başarılı");
  } else {
    console.log("hatalı");
  }
}

const addItem = (idTask) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${idTask}`;
  listDOM.append(liDOM);
};
