// A palavra "export" na frente da função a torna disponível para outros arquivos
export function createTask(title, list) {
    // --- Criação das Peças (seu código está perfeito) ---
    const taskItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "task-checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X"; // Ícone de lixeira simples
    deleteButton.className = "delete-button";

    // 1. Criando um container para agrupar o checkbox e o texto
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content'; // Damos uma classe para o grupo

    // 2. Adiciona o checkbox e o texto DENTRO do novo container
    taskContent.appendChild(checkBox);
    taskContent.appendChild(taskText);

    // 3. Adiciona o grupo da esquerda (taskContent) e o botão da direita ao <li> principal
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    // 4. Adiciona o <li> completo à lista
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


