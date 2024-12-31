document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

function addList() {
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
    newBtn.textContent = "Delete";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            newElement.classList.add("done");
        } else {
            newElement.classList.remove("done");
        }
        saveTasksToLocalStorage();
    });

    newBtn.addEventListener("click", function deleteList() {
        newElement.remove();
        saveTasksToLocalStorage();
    });

    newElement.appendChild(newBtn);
    newElement.appendChild(checkbox);
    cont.appendChild(newElement);

    saveTasksToLocalStorage();
    myInput.value = "";
}

function saveTasksToLocalStorage() {
    let cont = document.getElementById("container");
    let tasks = [];

    cont.querySelectorAll("li").forEach(item => {
        tasks.push({
            text: item.textContent.replace("Delete", "").trim(),
            completed: item.querySelector("#check").checked
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    let cont = document.getElementById("container");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        let newElement = document.createElement("li");
        newElement.id = "list";
        newElement.textContent = task.text;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "check";
        checkbox.checked = task.completed;

        if (task.completed) {
            newElement.classList.add("done");
        }

        let newBtn = document.createElement("button");
        newBtn.id = "forDelete";
        newBtn.textContent = "Delete";

        newBtn.addEventListener("click", function deleteList() {
            newElement.remove();
            saveTasksToLocalStorage();
        });

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                newElement.classList.add("done");
            } else {
                newElement.classList.remove("done");
            }
            saveTasksToLocalStorage();
        });

        newElement.appendChild(newBtn);
        newElement.appendChild(checkbox);
        cont.appendChild(newElement);
    });
}
