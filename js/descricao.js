const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.previousElementSibling;

        // Alterna a classe para abrir ou fechar
        panel.classList.toggle("open");

        // Altera o texto do botão
        if (panel.classList.contains("open")) {
            this.textContent = "Ver menos";
        } else {
            this.textContent = "Ver mais";
        }
    });
}