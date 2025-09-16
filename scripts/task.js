export function createTask(taskObject, list) {
    //Criação da tarefa 
    const taskItem = document.createElement("li");
    taskItem.dataset.id = taskObject.id; // Atribui o ID da tarefa ao elemento li

    if (taskObject.completed) {
        taskItem.classList.add("completed");
    }


    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "task-checkbox";
    const taskText = document.createElement("span");
    taskText.textContent = taskObject.text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-button";

    // --- Montagem ---
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    taskContent.appendChild(checkBox);
    taskContent.appendChild(taskText);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    list.appendChild(taskItem);
}

const successMessage = document.querySelector("#success-message");    

export function showSuccessMessage (){
    // 1. Mostra a mensagem
    successMessage.classList.add("show");

    // //2. Agenda o desaparecimento
    setTimeout(() =>{
     successMessage.classList.remove("show");

     }, 3000);
}


