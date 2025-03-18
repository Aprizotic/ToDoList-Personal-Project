let lastTaskAdded = []; 

function isDarkMode() {
    const body = document.querySelector('body');
    const styles = window.getComputedStyle(body);

    if (styles.getPropertyValue('background-color') === 'rgb(0, 0, 0)') {
        return true;
    }

    return false;
}

function addTask(isSubTask, nodeToAddTo) {
    let taskContent = prompt('Enter Task Below');

    if (taskContent) {
        const newList = document.createElement('li');
        const newDiv = document.createElement('div');
        const newContent = document.createElement('p');
        const newRemoveButton = document.createElement('button');
        const tasks = document.getElementById('tasks');
        const newAddSubTaskButton = document.createElement('button');

        newRemoveButton.classList.add('remove-task');

        if (isDarkMode()) {
            newRemoveButton.classList.add('dark-mode');
        }

        if (!isSubTask) {
            if (isDarkMode()) newAddSubTaskButton.classList.add('dark-mode');

            newAddSubTaskButton.classList.add('toggleable');
            newAddSubTaskButton.classList.add('new-sub-task');
            newAddSubTaskButton.textContent = '+';

            newAddSubTaskButton.addEventListener('click', function(e) {
                addTask(true, e.target.parentNode.childNodes[0]);
            });
        }

        newRemoveButton.classList.add('toggleable');
        newRemoveButton.textContent = '-';

        newContent.classList.add('content');
        newContent.textContent = taskContent;

        newDiv.classList.add('task');

        newDiv.appendChild(newContent);

        if (!isSubTask) newDiv.appendChild(newAddSubTaskButton);

        newDiv.appendChild(newRemoveButton);

        newList.appendChild(newDiv);

        newRemoveButton.addEventListener('click', function() {
            newList.remove();
        });

        if (isSubTask) {
            let newUl = document.createElement('ul');
            newUl.classList.add('sub-tasks');
            newUl.appendChild(newList);
            nodeToAddTo.appendChild(newUl);
            lastTaskAdded.unshift(newUl);
        } 
        else {
            tasks.appendChild(newList);
            lastTaskAdded.unshift(newList);
        }
    } 
    else {
        alert('Task cant be empty');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('new-task');
    const addSubTaskButton = document.getElementsByClassName('new-sub-task')[0];
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
    
    addTaskButton.addEventListener('click', function() {
        addTask(false);
    });

    addSubTaskButton.addEventListener('click', function(e) {
        addTask(true, e.target.parentNode.childNodes[1]);
    });

    window.addEventListener('keydown', e => {
        if (e.key === 'n') addTask();
        if (e.key === 'z' && e.ctrlKey) {
            if (lastTaskAdded[0]) {
                lastTaskAdded[0].remove();
                lastTaskAdded.splice(0, 1);
            }
        }
    })
});