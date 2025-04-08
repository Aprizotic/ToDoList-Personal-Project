let lastTaskAdded = [];
let taskFormPresent = false;

function isDarkMode() {
    const body = document.querySelector('body');

    if (body.classList.contains('dark-mode')) {
        return true;
    }

    return false;
}

function createNewTaskForm(isSubTask, nodeToAddTo) {
    const tasks = document.getElementById('tasks');
    const list = document.createElement('li');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    list.classList.add('li');
    list.classList.add('form-container')
    div.classList.add('form');
    input.classList.add('new-task-form');
    input.classList.add('toggleable');
    button.classList.add('submit-task-form');
    button.classList.add('toggleable');

    input.placeholder = 'Enter new task... ';
    input.type = 'text';

    button.textContent = 'Create';

    if (isDarkMode()) {
        button.classList.add('dark-mode');
        input.classList.add('dark-mode')
    }

    div.appendChild(input);
    div.appendChild(button);
    list.appendChild(div);

    if (isSubTask) {
        let newUl = document.createElement('ul');
        newUl.classList.add('sub-tasks');
        newUl.appendChild(list);
        nodeToAddTo.appendChild(newUl);
    }
    else {
        tasks.append(list);
    }
}

function addTask(isSubTask, nodeToAddTo) {
    if (!taskFormPresent) {
        createNewTaskForm(isSubTask, nodeToAddTo);
        taskFormPresent = true;
        const createButton = document.getElementsByClassName('submit-task-form')[0];
        const formContainer = document.getElementsByClassName('form-container')[0];
        const newTaskForm = document.getElementsByClassName('new-task-form')[0];
        newTaskForm.focus();

        newTaskForm.addEventListener('keydown', function (e) {
            if (e.key === "Enter") {
                const userInput = newTaskForm.value;

                if (userInput) {
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

                        newAddSubTaskButton.addEventListener('click', function (e) {
                            addTask(true, e.target.parentNode.childNodes[0]);
                        });
                    }

                    newRemoveButton.classList.add('toggleable');
                    newRemoveButton.textContent = '-';

                    newContent.classList.add('content');
                    newContent.textContent = userInput;

                    newDiv.classList.add('task');

                    newDiv.appendChild(newContent);

                    if (!isSubTask) newDiv.appendChild(newAddSubTaskButton);

                    newDiv.appendChild(newRemoveButton);

                    newList.appendChild(newDiv);

                    newRemoveButton.addEventListener('click', function () {
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

                    formContainer.remove();
                    taskFormPresent = false;
                }
                else {
                    formContainer.remove();
                    taskFormPresent = false;
                }
            }
        });


        createButton.addEventListener('click', function () {
            const userInput = newTaskForm.value;

            if (userInput) {
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

                    newAddSubTaskButton.addEventListener('click', function (e) {
                        addTask(true, e.target.parentNode.childNodes[0]);
                    });
                }

                newRemoveButton.classList.add('toggleable');
                newRemoveButton.textContent = '-';

                newContent.classList.add('content');
                newContent.textContent = userInput;

                newDiv.classList.add('task');

                newDiv.appendChild(newContent);

                if (!isSubTask) newDiv.appendChild(newAddSubTaskButton);

                newDiv.appendChild(newRemoveButton);

                newList.appendChild(newDiv);

                newRemoveButton.addEventListener('click', function () {
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

                formContainer.remove();
                taskFormPresent = false;
            }
            else {
                formContainer.remove();
                taskFormPresent = false;
            }
        });

        newTaskForm.addEventListener('focusout', function() {
            setTimeout(function() {
                formContainer.remove();
                taskFormPresent = false;
            }, '100');
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
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

    joke.addEventListener('click', function () {
        alert('You have not completed this task yet');
    });

    addTaskButton.addEventListener('click', function () {
        addTask(false);
    });

    addSubTaskButton.addEventListener('click', function (e) {
        addTask(true, e.target.parentNode.childNodes[1]); // P tag of it's parent
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'n') addTask();
        if (e.key === 'z' && e.ctrlKey) {
            if (lastTaskAdded[0]) {
                lastTaskAdded[0].remove();
                lastTaskAdded.splice(0, 1);
            }
        }
    })
});