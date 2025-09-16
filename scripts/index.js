// 1. IMPORTAÇÕES
import { createTask, showSuccessMessage } from './task.js';

// 2. ESTADO DA APLICAÇÃO
let tasks = []; // Nosso "banco de dados" de tarefas

// 3. SELETORES DO DOM
const taskForm = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const taskFilters = document.querySelector('#task-filters');

// 4. FUNÇÕES
function saveTasks() {
    localStorage.setItem('devtasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('devtasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(taskObject => {
            createTask(taskObject, taskList);
        });
    }
}

// =================================================================
// 5. EVENT LISTENERS
// =================================================================

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskTitle = taskInput.value;
    if (taskTitle.trim() === '') {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    // Cria o novo objeto da tarefa
    const newTask = {
        id: Date.now(),
        text: taskTitle,
        completed: false
    };

    // CORREÇÃO: A ordem correta é:
    // 1. Adiciona ao array
    tasks.push(newTask);
    // 2. Salva o array atualizado
    saveTasks();
    // 3. Cria na tela, passando o OBJETO
    createTask(newTask, taskList);

    // Funções auxiliares
    taskInput.value = "";
    showSuccessMessage();
});

// Listener dos filtros (sem mudanças)
taskFilters.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;
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


// Listener da lista de tarefas (com a lógica final)
taskList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const taskItem = clickedElement.closest('li');
    
    // Se o clique foi fora de um elemento de ação, não faz nada
    if (!taskItem) return;

    // Pega o ID do "crachá" que colocamos no <li>
    const taskId = Number(taskItem.dataset.id);

    // Ação de DELETAR (CORRIGIDA)
    if (clickedElement.classList.contains('delete-button')) {
        // Filtra o array, mantendo apenas as tarefas com ID DIFERENTE
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        taskItem.remove();
    }

    // Ação de COMPLETAR (LÓGICA FINAL)
    if (clickedElement.classList.contains('task-checkbox')) {
        // 1. Encontra a tarefa no nosso array de dados
        const task = tasks.find(t => t.id === taskId);
        
        // 2. Inverte o estado 'completed' dela
        task.completed = !task.completed;
        
        // 3. Salva o estado atualizado no localStorage
        saveTasks();
        
        // 4. Atualiza a aparência na tela
        taskItem.classList.toggle('completed');
    }
});

// =================================================================
// 6. INICIALIZAÇÃO
// =================================================================
loadTasks();