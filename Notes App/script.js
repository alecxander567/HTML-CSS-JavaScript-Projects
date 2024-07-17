function createEle(){
    let container = document.getElementById("container");
    let create = document.getElementById("create");
    let content = document.getElementById("content");

    let newElement = document.createElement("div");
    newElement.id = "content";
    newElement.setAttribute('contenteditable', true)
    let newBtn = document.createElement("button");
    newBtn.id = "del";
    newBtn.textContent = "Delete";

  container.appendChild(newElement);
  container.appendChild(newBtn);

    function delEle(){
   newElement.remove();
   newBtn.style.visibility = "hidden";    	
   }

   newBtn.addEventListener("click", delEle);
}

    create.addEventListener("click", createEle); 

