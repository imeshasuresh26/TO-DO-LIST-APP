
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
