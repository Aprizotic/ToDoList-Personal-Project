function isDarkMode() {
    const body = document.querySelector('body');
    const styles = window.getComputedStyle(body);

    if (styles.getPropertyValue('background-color') === 'rgb(0, 0, 0)') {
        return true;
    }

    return false;
}

function addTask() {
    let taskContent = prompt('Enter Task Below');

    if (taskContent) {
        const newList = document.createElement('li');
        const newDiv = document.createElement('div');
        const newContent = document.createElement('p');
        const newRemoveButton = document.createElement('button');
        const tasks = document.getElementById('tasks');

        newRemoveButton.classList.add('remove-task');

        if (isDarkMode()) {
            newRemoveButton.classList.add('dark-mode');
        }

        newRemoveButton.classList.add('toggleable');
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
    const toggleTheme = document.getElementById('toggle-dark-mode');

    toggleTheme.addEventListener('click', function() {
        const theme = document.getElementsByClassName('toggleable');

        for (let i = 0; i < theme.length; i++) {
            theme[i].classList.toggle('dark-mode');
        }

        if (toggleTheme.textContent === 'Save my eyes') {
            toggleTheme.textContent = 'Blind me'
        }
        else {
            toggleTheme.textContent = 'Save my eyes'
        }
    });

    joke.addEventListener('click', function() {
        alert('You have not completed this task yet');
    })

    addTaskButton.addEventListener('click', addTask);
    window.addEventListener('keydown', e => {
        if (e.key === 'n') addTask();
    })
});