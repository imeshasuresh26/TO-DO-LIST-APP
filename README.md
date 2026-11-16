
## Ex03 To-Do List using JavaScript
## Date:16.11.2026
## Name: Imesha S
## Reg no : 212225040131
## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM

index.html
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskMate - To Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">

        <header>
            <h1>TaskMate <span>✦</span></h1>
            <p>Your day, your tasks, your success!</p>
        </header>

        <section class="summary">
            <div class="summary-box">
                <h2 id="totalTasks">0</h2>
                <p>Total Tasks</p>
            </div>

            <div class="summary-box">
                <h2 id="completedTasks">0</h2>
                <p>Completed</p>
            </div>

            <div class="summary-box">
                <h2 id="pendingTasks">0</h2>
                <p>Pending</p>
            </div>
        </section>

        <section class="add-section">
            <h3>+ Add a New Task</h3>

            <input
                type="text"
                id="taskInput"
                placeholder="What do you need to do?"
            >

            <div class="task-options">
                <select id="priority">
                    <option value="Low">Low Priority</option>
                    <option value="Medium" selected>Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>

                <input type="date" id="dueDate">

                <button id="addBtn" onclick="addTask()">Add Task</button>
            </div>
        </section>

        <section class="tasks-section">

            <div class="task-heading">
                <h3>My Tasks</h3>
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search tasks..."
                    oninput="displayTasks()"
                >
            </div>

            <div class="filters">
                <button class="active" onclick="filterTasks('all', this)">All</button>
                <button onclick="filterTasks('pending', this)">Pending</button>
                <button onclick="filterTasks('completed', this)">Completed</button>
            </div>

            <ul id="taskList"></ul>

            <p id="emptyMessage">No tasks yet. Add your first task!</p>

        </section>

        <footer>
            <p>Made with ♥ using HTML, CSS & JavaScript</p>
        </footer>

    </div>

    <script src="script.js"></script>
</body>
</html>

```
style.css
```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #eee6ff, #fcecf5);
    min-height: 100vh;
    padding: 40px 15px;
    color: #39304a;
}

.container {
    max-width: 700px;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 18px;
    box-shadow: 0 8px 30px rgba(80, 50, 100, 0.12);
}

header {
    text-align: center;
    margin-bottom: 25px;
}

header h1 {
    color: #8055b5;
    font-size: 32px;
}

header h1 span {
    color: #e5a4c8;
}

header p {
    color: #888;
    margin-top: 7px;
}

.summary {
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
}

.summary-box {
    flex: 1;
    background: #f5efff;
    padding: 16px 8px;
    text-align: center;
    border-radius: 12px;
}

.summary-box h2 {
    color: #8055b5;
    font-size: 25px;
}

.summary-box p {
    font-size: 13px;
    color: #777;
    margin-top: 5px;
}

.add-section {
    background: #faf7ff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 25px;
}

h3 {
    margin-bottom: 15px;
}

input, select {
    padding: 12px;
    border: 1px solid #ded5eb;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    background: white;
    color: #39304a;
}

input:focus, select:focus {
    border-color: #9668c8;
}

#taskInput {
    width: 100%;
    margin-bottom: 12px;
}

.task-options {
    display: flex;
    gap: 10px;
}

.task-options select,
.task-options input {
    flex: 1;
    min-width: 0;
}

button {
    border: none;
    border-radius: 8px;
    padding: 11px 16px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;
}

#addBtn {
    background: #8055b5;
    color: white;
}

#addBtn:hover {
    background: #684093;
}

.task-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
}

.task-heading h3 {
    margin: 0;
}

#searchInput {
    width: 200px;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
}

.filters button {
    background: #f1ebf8;
    color: #76539c;
}

.filters button.active,
.filters button:hover {
    background: #8055b5;
    color: white;
}

#taskList {
    list-style: none;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    background: #faf8fc;
    border: 1px solid #eee7f4;
    border-radius: 10px;
    margin-bottom: 10px;
}

.task-item input[type="checkbox"] {
    accent-color: #8055b5;
    width: 17px;
    height: 17px;
    cursor: pointer;
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-name {
    font-weight: 600;
    overflow-wrap: anywhere;
}

.task-date {
    color: #999;
    font-size: 12px;
    margin-top: 5px;
}

.completed {
    text-decoration: line-through;
    color: #aaa;
}

.priority {
    font-size: 11px;
    padding: 5px 8px;
    border-radius: 20px;
    font-weight: bold;
}

.High {
    background: #ffe0e0;
    color: #d34a4a;
}

.Medium {
    background: #fff0d6;
    color: #bc8224;
}

.Low {
    background: #e1f5e8;
    color: #3b9360;
}

.edit-btn {
    background: #e9e0f7;
    color: #70499b;
    padding: 8px 10px;
}

.delete-btn {
    background: #ffe5e5;
    color: #d34a4a;
    padding: 8px 10px;
}

.edit-btn:hover, .delete-btn:hover {
    opacity: 0.75;
}

#emptyMessage {
    text-align: center;
    color: #aaa;
    padding: 25px 5px;
}

footer {
    text-align: center;
    color: #aaa;
    font-size: 13px;
    margin-top: 25px;
}

@media (max-width: 550px) {
    .container {
        padding: 20px 15px;
    }

    .summary {
        gap: 7px;
    }

    .task-options {
        flex-wrap: wrap;
    }

    .task-options select,
    .task-options input {
        flex: 1 1 40%;
    }

    #addBtn {
        width: 100%;
    }

    .task-heading {
        align-items: stretch;
        flex-direction: column;
    }

    #searchInput {
        width: 100%;
    }

    .task-item {
        flex-wrap: wrap;
    }
}

```
script.js
```

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

// Save tasks in browser storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
    let input = document.getElementById("taskInput");
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;

    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let task = {
        id: Date.now(),
        text: taskText,
        priority: priority,
        dueDate: dueDate,
        completed: false
    };

    tasks.push(task);

    input.value = "";
    document.getElementById("dueDate").value = "";

    saveTasks();
    displayTasks();
}

// Display tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    let search = document.getElementById("searchInput").value.toLowerCase();

    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        let matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "pending" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        let matchesSearch = task.text.toLowerCase().includes(search);

        return matchesFilter && matchesSearch;
    });

    filteredTasks.forEach(task => {

        let li = document.createElement("li");
        li.className = "task-item";

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });

        // Task details
        let info = document.createElement("div");
        info.className = "task-info";

        let name = document.createElement("div");
        name.className = "task-name";

        if (task.completed) {
            name.classList.add("completed");
        }

        name.textContent = task.text;

        let date = document.createElement("div");
        date.className = "task-date";
        date.textContent = task.dueDate
            ? "Due: " + task.dueDate
            : "No due date";

        info.appendChild(name);
        info.appendChild(date);

        // Priority label
        let priority = document.createElement("span");
        priority.className = "priority " + task.priority;
        priority.textContent = task.priority;

        // Edit button
        let editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";

        editButton.onclick = function() {
            editTask(task.id);
        };

        // Delete button
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            deleteTask(task.id);
        };

        li.appendChild(checkbox);
        li.appendChild(info);
        li.appendChild(priority);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });

    // Empty message
    document.getElementById("emptyMessage").style.display =
        filteredTasks.length === 0 ? "block" : "none";

    updateSummary();
}

// Mark task as completed or pending
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasks();
    displayTasks();
}

// Delete a task
function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(task => task.id !== id);

        saveTasks();
        displayTasks();
    }
}

// Edit a task
function editTask(id) {
    let task = tasks.find(task => task.id === id);

    let newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();

        saveTasks();
        displayTasks();
    }
}

// Filter tasks
function filterTasks(filter, button) {
    currentFilter = filter;

    document.querySelectorAll(".filters button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    displayTasks();
}

// Update task summary
function updateSummary() {
    let total = tasks.length;
    let completed = tasks.filter(task => task.completed).length;
    let pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
}

// Search tasks
function searchTasks() {
    displayTasks();
}

// Press Enter to add a task
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Show saved tasks when page loads
displayTasks();

```
## OUTPUT
<img width="1916" height="963" alt="Screenshot 2026-11-17 003936" src="https://github.com/user-attachments/assets/04538315-e5e0-4dcc-9e87-14a9ff07d43d" />

<img width="1038" height="902" alt="Screenshot 2026-11-17 003957" src="https://github.com/user-attachments/assets/88491b71-15f7-40ff-b219-a003c4a9ac1d" />

<img width="922" height="881" alt="Screenshot 2026-11-17 004057" src="https://github.com/user-attachments/assets/cf3db126-c1dd-4acf-a2c7-83b195dc09a0" />


## RESULT
The program for creating To-do list using JavaScript is executed successfully.

