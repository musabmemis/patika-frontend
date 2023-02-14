let listDOM = document.querySelector("ul") 
listDOM.addEventListener("click",listDone,false );

function listDone(event){
    event.target.classList.toggle("checked");
}