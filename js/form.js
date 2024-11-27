const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8minfj4', 'template_3thcyg9', e.target)
        .then(() => {
            alert("Email enviado com sucesso!");
        })
        .catch((err) => {
            console.error("Erro:", err);
            alert("Ocorreu um erro ao enviar o email.");
        });
});