


const task = document.getElementById('add-task');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('added-task');

function addTask(){

    // select value
    const  taskText = task.value.trim();

    // create element 
    const listItem = document.createElement('li');
    listItem.classList.add('to-do-item');
    listItem.innerHTML= `
    <span id='taskText'>${taskText}</span>
    <button class='removeBtn' id='btnX'>x</button>
    `;

    //function task completed
    listItem.querySelector('#taskText').addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // function delete task
    listItem.querySelector('#btnX').addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    //adding child
    todoList.appendChild(listItem);
    
    //cleaning input
    task.value = '';
    
}
// button onclick
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
})