var addBtn = document.querySelector('button');
var toDoList = document.querySelector('#incomplete-tasks');
var completedList = document.querySelector('#completed-tasks');

//adding new task
addBtn.addEventListener('click', addTask);

//editing existing task
toDoList.addEventListener('click', editTask);

//after complete a task
toDoList.addEventListener('change', taskDone);

//removing a task from the completed task list
completedList.addEventListener('click', deleteTask);

//removing a task from the to-do task list
toDoList.addEventListener('click', deleteTask);

function addTask(e) {
    var taskName = document.querySelector('#new-task').value;
    //checking if the input is empty or not
    if (taskName != '') {
        var task = document.createElement('li');
        // adding the general format elements to the new task

        task.innerHTML = '<input type="checkbox"><label>' + taskName + '</label><input type="text" value="' + taskName + '"><button class="edit">Edit</button><button class="delete">Delete</button>';

        toDoList.appendChild(task);
    }
}

function editTask(e) {
    // checking if the click event was held in edit button
    if (e.target.classList.contains('edit')) {

        //getting the task which needs to be edited
        var task = e.target.parentNode;

        var editBar = e.target.parentNode.children[2];

        // toggling the 'editMode' class name to apply individual styling to the label and the input each time of clicking the edit button
        task.classList.toggle('editMode');

        // getting the new name of the task for the label
        var newName = editBar.value;

        console.log(newName);

        var label = e.target.parentNode.children[1];

        // inserting the new name of the task to the label
        label.textContent = newName;

        //checking if the edit button gets clicked
        console.log('edit');
    }
}

function taskDone(e) {
    //completed task
    var task = e.target.parentNode;

    // removing checkbox, edit button and text input from a completed task
    for(let i = 0; i < task.childNodes.length; i++) {
        if(i != 1) {
            task.removeChild(task.childNodes[i]);
        }
    }

    //removing the complete task from the to do list
    toDoList.removeChild(task);

    //adding the completed task to the completed list
    completedList.appendChild(task);
}

function undo(e) {
    //undo task
    var task = e.target.parentNode;

    //removing the complete task from the completed list
    completedList.removeChild(task);

    //adding the completed task to the to-do list
    toDoList.appendChild(task);
}

function deleteTask(e) {
    // checking if the click event was held in delete button
    if(e.target.classList.contains('delete')) {
        var task = e.target.parentNode;
        // deleting the task

        //checking if the task belongs to completed task list or not
        if(task.parentNode == completedList) {
            completedList.removeChild(task);
        }

        else {
            toDoList.removeChild(task);
        }
    }
}