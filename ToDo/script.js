function addList(){
    let cont = document.getElementById("container");
    let myInput = document.getElementById("input");
    let btn = document.getElementById("add");

    let newElement = document.createElement("li");
    newElement.id = "list";
    newElement.textContent = myInput.value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check";
    
    let newBtn = document.createElement("button");
    newBtn.id = "forDelete";
    newBtn.textContent = "Delete"

    checkbox.addEventListener("change", function checked(){
        if(checkbox){
            newElement.classList.add("done");
        } else{
            newElement.classList.remove("done");
        }
    });
 
 newElement.appendChild(newBtn);
    newElement.appendChild(checkbox);
    cont.appendChild(newElement);

    myInput.value = "";
 
 function deleteList(){
     newElement.remove();
 }

 newBtn.addEventListener("click", deleteList);

}