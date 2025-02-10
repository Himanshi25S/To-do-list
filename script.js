// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskList = document.getElementById('taskList');
        
        // Create a new task list item
        const li = document.createElement('li');
        li.classList.add('incomplete');
        
        // Add the task text
        const taskText = document.createElement('span');
        taskText.innerText = taskValue;
        li.appendChild(taskText);
        
        // Create the Complete/Uncomplete button
        const button = document.createElement('button');
        button.classList.add('complete-btn');
        button.innerText = "Complete";
        button.onclick = function() { toggleComplete(li, button); };
        
        // Append the button to the task item
        li.appendChild(button);
        
        // Add the task item to the list
        taskList.appendChild(li);
        
        // Clear the input field after adding the task
        taskInput.value = "";
    }
}

// Function to toggle task completion
function toggleComplete(task, button) {
    if (task.classList.contains('incomplete')) {
        task.classList.remove('incomplete');
        task.classList.add('completed');
        button.innerText = "Uncomplete";
        button.classList.remove('complete-btn');
        button.classList.add('uncomplete-btn');
    } else {
        task.classList.remove('completed');
        task.classList.add('incomplete');
        button.innerText = "Complete";
        button.classList.remove('uncomplete-btn');
        button.classList.add('complete-btn');
    }
}
