// A palavra "export" na frente da função a torna disponível para outros arquivos
export function createTask(title) {
    // Por enquanto, vamos só confirmar que a função foi chamada corretamente
    console.log(`Função createTask chamada com o título: ${title}`);
}