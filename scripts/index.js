// No topo do arquivo, importamos a função específica do nosso outro arquivo
import  { createTask, showSuccessMessage } from './task.js';

//SELETORES 
const taskForm = document.querySelector('form'); //Criando uma variável para o formulário
const taskInput = document.querySelector('#task-input'); //Criando uma variável para o input de tarefa
const taskList = document.querySelector('#task-list'); //Criando uma variável para a lista de tarefas

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