// 1. IMPORTAÇÕES
import { createTask, showSuccessMessage } from './task.js';

// 2. ESTADO DA APLICAÇÃO
// Aqui guardamos os dados principais que a aplicação usa.

let tasks = []; // Nosso "banco de dados" de tarefas


// 3. SELETORES DO DOM
// Guardando as "pontes" para os elementos HTML aqui.
const taskForm = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const taskFilters = document.querySelector('#task-filters');


// 4. FUNÇÕES
// Aqui ficam as funções que definem o que nossa aplicação faz.

/**
 * Salva o array de tarefas atual no localStorage.
 */
function saveTasks() {
    localStorage.setItem('devtasks', JSON.stringify(tasks));
}

/**
 * Carrega as tarefas do localStorage e as exibe na tela.
 */
function loadTasks() {
    const savedTasks = localStorage.getItem('devtasks');

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(taskTitle => {
            createTask(taskTitle, taskList);
        });
    }
}


// 5. EVENT LISTENERS
// Ouvindo as ações do usuário.

// Listener para o formulário de adição de tarefas
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskTitle = taskInput.value;
    
    // Validação para não adicionar tarefas vazias
    if (taskTitle.trim() === '') {
        alert("Por favor, digite uma tarefa.");
        return; // Para a execução da função aqui
    }

    // LÓGICA DE ADICIONAR TAREFA:
    // 1. Adiciona a nova tarefa ao nosso array
    tasks.push(taskTitle);

    // 2. Salva o array atualizado no localStorage
    saveTasks();

    // 3. Cria o elemento SÓ DA NOVA TAREFA na tela
    createTask(taskTitle, taskList);

    // Funções auxiliares
    taskInput.value = "";
    showSuccessMessage();
});


// Listener para os botões de filtro
taskFilters.addEventListener('click', (event) => {
    // Garante que o clique foi em um botão
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const filter = event.target.dataset.filter;
    const taskItems = taskList.querySelectorAll('li');

    taskItems.forEach(task => {
        const isCompleted = task.classList.contains('completed');

        switch (filter) {
            case 'todas':
                task.style.display = 'flex';
                break;
            case 'pendentes':
                task.style.display = isCompleted ? 'none' : 'flex';
                break;
            case 'concluidas':
                task.style.display = isCompleted ? 'flex' : 'none';
                break;
        }
    });
});


// 6. INICIALIZAÇÃO
// Código que roda assim que a página é carregada.
loadTasks();