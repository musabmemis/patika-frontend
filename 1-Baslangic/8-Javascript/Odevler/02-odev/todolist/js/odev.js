let listDOM = document.querySelector("ul") 
listDOM.addEventListener("click",listDone);

function listDone(event){
    event.target.classList.toggle("checked");
}

const idTask = document.querySelector("#task");

function newElement() {
    addItem(idTask.value)
} 

const addItem = (idTask) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${idTask}`
    listDOM.append(liDOM);
}