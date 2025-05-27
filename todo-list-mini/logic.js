const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

document.addEventListener("DOMContentLoaded", loadTasksFromStorage)

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    if(task === "") return;
    addTaskToDOM(task);
    saveTaskToStorage(task);
    taskInput.value = "";
})

deleteAllBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    localStorage.removeItem("tasks");
})

function loadTasksFromStorage(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTaskToDOM);
}

function addTaskToDOM(task){
    const li = document.createElement("li");
    li.textContent = task;
    const delBtn = document.createElement("button");
    delBtn.textContent="Delete"
    delBtn.classList.add("delete-btn");
    delBtn.onclick = () =>{
        li.remove();
        removeTaskFromStorage(task);
    }
    li.appendChild(delBtn);
    taskList.appendChild(li);

}

function saveTaskToStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromStorage(tasksToRemove){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== tasksToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

