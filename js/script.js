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

const msg = document.createElement("p"); //Mensagem de confirmação  
msg.textContent = "Mensagem enviada com sucesso!";
msg.style.color = "green";

form.appendChild(msg);