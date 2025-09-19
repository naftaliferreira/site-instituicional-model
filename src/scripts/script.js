document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simula o envio
        console.log('Formulário enviado com sucesso!');
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);

        // Exibe uma mensagem de sucesso para o usuário
        alert('Obrigado! Sua mensagem foi enviada com sucesso.');

        // Limpa os campos do formulário
        form.reset();
    });
});