// A palavra "export" na frente da função a torna disponível para outros arquivos
export function createTask(title, list) {
   const taskItem =  document.createElement("li");
   taskItem.textContent = title;
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
