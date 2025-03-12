function addTask() {
    let taskDetails = prompt('Enter Task Below');

    while (!taskDetails) {
        taskDetails = prompt('Task cant be empty');
    }

    const newTask = document.createElement('li');
    const tasks = document.getElementById('tasks');

    newTask.textContent = taskDetails;
    tasks.appendChild(newTask);
}

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('new-task');
    addTaskButton.addEventListener('click', addTask);
});