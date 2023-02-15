let listDOM = document.querySelector("ul#list");
listDOM.addEventListener("click", listDone);

function listDone(event) {
  event.target.classList.toggle("checked");
}

let myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
  let btn = document.createElement("button");
  let span = document.createElement("span");
  btn.type = "button";
  btn.className = "close";
  btn.ariaLabel = "Close";
  span.ariaHidden = "true";
  span.innerHTML = "&times";
  btn.appendChild(span);
  myNodeList[i].appendChild(btn);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = close[i].parentElement;
    div.remove()
}
}
function toastShow(str) {
    $(document).ready(function () {
      $(str).toast("show");
    });
  }

function newElement() {
    const idTask = document.querySelector("#task");
    if (idTask.value) {
      addItem(idTask.value);
      idTask.value = "";
      toastShow(".success");
    } else {
      toastShow(".error");
    }
  }

const addItem = (idTask) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${idTask}`;
  listDOM.append(liDOM);
  for (let i = 0; i < myNodeList.length; i++) {
    let btn = document.createElement("button");
    let span = document.createElement("span");
    btn.type = "button";
    btn.className = "close";
    btn.ariaLabel = "Close";
    span.ariaHidden = "true";
    span.innerHTML = "&times";
    btn.appendChild(span);
    myNodeList[i].appendChild(btn);
  }
};
