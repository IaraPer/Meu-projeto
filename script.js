// Seleciona o botão e o título pelo ID
const botao = document.getElementById("meuBotao");
const titulo = document.getElementById("titulo");

// Adiciona um evento de clique no botão
botao.addEventListener("click", () => {
    titulo.textContent = "Você clicou no botão!";
});
