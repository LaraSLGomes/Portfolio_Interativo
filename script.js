const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const submitButton = document.querySelector("#submitButton");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("active");
}

submitButton.onclick = () => {
    // Capturando os dados inseridos no formulário
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    
    // Verificando se todos os campos foram preenchidos
    if (name && email && message) {
        // Aqui, você pode fazer algo com os dados, como enviar para um servidor
        // Por enquanto, apenas exibimos uma mensagem de confirmação
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso!`);

        // Limpar o formulário
        document.querySelector("#contactForm").reset();
    } else {
        // Se algum campo estiver vazio
        alert("Por favor, preencha todos os campos.");
    }
};