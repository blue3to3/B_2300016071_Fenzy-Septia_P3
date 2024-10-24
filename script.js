// Add Task function
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskValue;

    const span = document.createElement('span');
    span.textContent = "×";
    span.className = "close";
    span.onclick = function () {
        deleteTask(this);
    };
    li.appendChild(span);

    li.ondblclick = function () {
        editTask(this);
    };

    document.getElementById('tasklist').appendChild(li);
    taskInput.value = "";
}

// Delete Task function
function deleteTask(element) {
    const task = element.parentElement;
    task.remove();
}

// Edit Task function
function editTask(element) {
    const newTask = prompt("Edit Task:", element.firstChild.textContent.trim());
    if (newTask !== null && newTask.trim() !== "") {
        element.firstChild.textContent = newTask;
    }
}

// Change Background Color
function changeBackgroundColor() {
    const color = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = color;
}

// Change Font Size
function changeFontSize(size) {
    document.body.style.fontSize = size + 'px';
    document.getElementById('fontSizeValue').textContent = size + 'px';
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Change Font Style
function changeFontStyle() {
    const font = document.getElementById('fontStyle').value;
    document.body.style.fontFamily = font;
}