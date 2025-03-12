function addTask() {
    let taskDetails = prompt('Enter Task Below');

    if (taskDetails) {
        const newTask = document.createElement('li');
        const tasks = document.getElementById('tasks');

        newTask.classList.add('task');
        newTask.textContent = taskDetails;
        tasks.appendChild(newTask);
    }
    else {
        alert('Task cant be empty');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('new-task');
    addTaskButton.addEventListener('click', addTask);
});