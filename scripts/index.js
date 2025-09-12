// No topo do arquivo, importamos a função específica do nosso outro arquivo
import  { createTask, showSuccessMessage } from './task.js';

//SELETORES 
const taskForm = document.querySelector('form'); //Criando uma variável para o formulário
const taskInput = document.querySelector('#task-input'); //Criando uma variável para o input de tarefa
const taskList = document.querySelector('#task-list'); //Criando uma variável para a lista de tarefas
const taskFilters = document.querySelector('#task-filters'); //Criando uma variável para os botões de filtro


taskFilters.addEventListener('click', (event) => {
 const filter = event.target.dataset.filter; // Obtém o filtro do botão clicado

 // 1. pega todos os itens da lista
 const tasks = taskList.querySelectorAll('li');

 // 2. passa por cada tarefa li uma por uma

 tasks.forEach(task => {
    switch (filter) {
        case 'todas':
            // o que fazer quando o filtro for "todas"
            task.style.display = 'flex'; // Mostra todas as tarefas
            break;


        case 'pendentes':
            // o que fazer quando o filtro for "pendentes"
            if (task.classList.contains('completed')) {
                task.style.display = 'none'; // Esconde tarefas concluídas
            } else {
                // se não estiver concluída, mostra
                task.style.display = 'flex'; // Mostra a tarefa
            }
            break;


            
        case 'concluidas':

        if (task.classList.contains('completed')) {
            // se a tarefa está completada, então mostra
            task.style.display = 'flex'; // Mostra a tarefa
        } else {
            task.style.display = 'none'; // Esconde tarefas pendentes
        }
            // o que fazer quando o filtro for "concluidas"
            break;

    }
 });

 
});

//Event Listener para o formulário
taskForm.addEventListener("submit", (event) =>{
    event.preventDefault(); //Impedindo recarregamento de página

    const taskTitle = taskInput.value;
    
    //chamando function importada
    createTask(taskTitle, taskList);

    //limpa o input depois de adicionar
    taskInput.value = "";

    showSuccessMessage();
}) 