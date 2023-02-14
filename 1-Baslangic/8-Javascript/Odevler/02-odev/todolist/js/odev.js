let listDOM = document.querySelector("ul") 
listDOM.addEventListener("click",listDone);

function listDone(event){
    event.target.classList.toggle("checked");
}


let lisDOM = document.querySelector("List") 


function newElement() {
    let lisDOM = document.querySelector("ul") 
    let liDOM = document.createElement("li");
    liDOM.innerHTML = "deneme"
    
    lisDOM.append(liDOM);
} 

