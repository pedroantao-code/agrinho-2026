// Banco de dados de dicas sustentáveis
const dicasSustentaveis = [
    "A rotação de culturas melhora a saúde do solo e quebra o ciclo de pragas de forma natural.",
    "A captação da água da chuva em propriedades rurais pode reduzir drasticamente o uso de reservatórios naturais.",
    "O uso de biofertilizantes caseiros substitui defensivos químicos nocivos e economiza recursos financeiros.",
    "Plantar árvores ao redor da lavoura cria barreiras de vento que reduzem a erosão do solo.",
    "A compostagem de resíduos orgânicos transforma o que seria lixo em um adubo extremamente rico para as plantas.",
    "Priorizar o mercado local e pequenos produtores reduz a pegada de carbono do transporte de alimentos."
];

// Elementos do Gerador de Dicas
const btnDica = document.getElementById('btn-dica');
const textoDica = document.getElementById('texto-dica');

// Evento de clique para mudar a dica
btnDica.addEventListener('click', () => {
    // Escolhe um índice aleatório dentro do array de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicasSustentaveis.length);
    
    // Adiciona uma animação simples de troca de texto
    textoDica.style.opacity = 0;
    setTimeout(() => {
        textoDica.textContent = dicasSustentaveis[indiceAleatorio];
        textoDica.style.opacity = 1;
    }, 200);
});

// Estilização rápida via JS para a transição do texto da dica
textoDica.style.transition = "opacity 0.2s ease";


// Validação e Interação do Formulário de Contato
const formContato = document.getElementById('form-contato');
const formFeedback = document.getElementById('form-feedback');

formContato.addEventListener('submit', (evento) => {
    // Evita o recarregamento padrão da página ao enviar o formulário
    evento.preventDefault();

    // Captura os dados inseridos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Se o HTML5 já validou o preenchimento, mostramos a mensagem de sucesso profissional
    formFeedback.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem sobre sustentabilidade foi enviada com sucesso para nossa equipe do Agrinho.`;
    formFeedback.className = "feedback-mensagem sucesso";
    
    // Reseta o formulário para novos envios
    formContato.reset();
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        formFeedback.className = "feedback-mensagem hidden";
    }, 500);
});