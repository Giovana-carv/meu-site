// Exemplo: menu mobile simples
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// Futuras interações podem ser adicionadas aqui
const form = document.querySelector(".form-contato");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}