async function fetchTasks() {
    const response = await fetch('/todos');
    const tasks = await response.json();
    document.getElementById('taskList').innerHTML = tasks.map(task => `<li>${task.task}</li>`).join('');
}

async function addTask() {
    const task = document.getElementById('taskInput').value;
    await fetch('/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    });
    fetchTasks();
    document.getElementById('taskInput').value = '';
}

window.onload = fetchTasks;
