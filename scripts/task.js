// A palavra "export" na frente da função a torna disponível para outros arquivos
export function createTask(title) {
    // Por enquanto, vamos só confirmar que a função foi chamada corretamente
    console.log(`Função createTask chamada com o título: ${title}`);
}

const successMessage = document.querySelector("#success-message");    

export function showSuccessMessage (){
    //1. Mostra a mensagem
    successMessage.classList.add("show");

    // //2. Agenda o desaparecimento
    // setTimeout(() =>{
    //      successMessage.classList.remove("show");

    // }, 2000);

}

