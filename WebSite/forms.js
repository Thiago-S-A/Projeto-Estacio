// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const btnReset = document.querySelector("button[type='reset']");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede envio automático

        // Pega os valores
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const idade = document.getElementById("idade").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validações
        if (!nome || !email || !senha || !idade || !mensagem) {
            alert("⚠️ Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Regex simples para validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("❌ Por favor, insira um email válido.");
            return;
        }
    });

    btnReset.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja limpar todos os campos?")) {
            form.reset();
        }
    });
}
);      