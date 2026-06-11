// DOCUMENT READY - Garante que o HTML carregou antes de rodar o JS
document.addEventListener("DOMContentLoaded", () => {
    
    /* -------------------------------------------
       FUNCIONALIDADE 1: GERADOR ALEATÓRIO DE DICAS
    ------------------------------------------- */
    const dicas = [
        "Prefira alimentos sazonais e locais. Eles gastam menos combustível para chegar até você!",
        "Evite o desperdício de comida. Cascas e talos podem virar adubo para plantas (compostagem).",
        "Se tiver espaço em casa, monte uma mini horta em vasos. Manjericão e hortelã crescem super fácil!",
        "Economize água na hora de lavar vegetais usando uma bacia, e reutilize essa água para regar suas plantas.",
        "Apoie pequenos produtores de feiras orgânicas da sua região."
    ];

    const btnDica = document.getElementById("btn-dica");
    const caixaDica = document.getElementById("caixa-dica");
    const textoDica = document.getElementById("texto-dica");

    btnDica.addEventListener("click", () => {
        // Sorteia um índice do array de dicas
        const indiceAleatorio = Math.floor(Math.random() * dicas.length);
        
        // Exibe o texto e remove a classe que esconde o elemento
        textoDica.textContent = dicas[indiceAleatorio];
        caixaDica.classList.remove("hidden");
    });

    /* -------------------------------------------
       FUNCIONALIDADE 2: VALIDAÇÃO DO FORMULÁRIO
    ------------------------------------------- */
    const form = document.getElementById("form-contato");
    const msgSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", (evento) => {
        // Impede que a página recarregue ao enviar o formulário
        evento.preventDefault();

        // Pega os valores digitados (útil se quiser validar mais coisas depois)
        const nome = document.getElementById("nome").value.trim();

        if(nome !== "") {
            // Esconde o formulário e mostra a mensagem de sucesso
            form.classList.add("hidden");
            msgSucesso.classList.remove("hidden");
        }
    });
});