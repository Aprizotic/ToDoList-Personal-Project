function addTask() {
    let taskContent = prompt('Enter Task Below');

    if (taskContent) {
        const newList = document.createElement('li');
        const newDiv = document.createElement('div');
        const newContent = document.createElement('p');
        const newRemoveButton = document.createElement('button');
        const tasks = document.getElementById('tasks');

        newRemoveButton.classList.add('remove-task');
        newRemoveButton.textContent = '-';

        newContent.classList.add('content');
        newContent.textContent = taskContent;

        newDiv.classList.add('task');
        newDiv.appendChild(newContent);
        newDiv.appendChild(newRemoveButton);

        newList.appendChild(newDiv);

        tasks.appendChild(newList);

        newRemoveButton.addEventListener('click', function() {
            newList.remove();
        });
    }
    else {
        alert('Task cant be empty');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('new-task');
    const joke = document.getElementById('joke');
    joke.addEventListener('click', function() {
        alert('You have not completed this task yet');
    })
    addTaskButton.addEventListener('click', addTask);
});