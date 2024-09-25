"use strict";
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
//const taskList = document.getElementById('taskList');
// Add task event listener
// addTaskBtn.addEventListener('click', () => {
//     const taskText = taskInput.value.trim();
//     if (taskText !== '') {
//         addTask(taskText);
//         taskInput.value = ''; // Clear input field
//     }
// });
// Function to add a new task
function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "";
        li.appendChild(span);
        
    }

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagNane === "LI"){
        e.target.ClassList.toggle("checked");
    }
   else if(e.target.tagNane === "SPAN"){
    e.target.parentElement.remove();
   } 
}, false);

const deleteButton = document.createElement('button');
deleteButton.textContent = 'X';
deleteButton.addEventListener('click', () => {
    todoList.removeChild(todoItem);


todocontainerbutton.appendChild(todoSpan)
todocontainerbutton.appendChild(deleteButton);
todoList.appendChild(todoItem);

todoInput.value = '';

});