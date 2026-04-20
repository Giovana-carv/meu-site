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

// CADASTRO
const formCadastro = document.querySelector(".form-cadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = {
      nome: document.getElementById("cad-nome").value,
      email: document.getElementById("cad-email").value,
      telefone: document.getElementById("cad-telefone").value,
      senha: document.getElementById("cad-senha").value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });
}

// LOGIN
const formLogin = document.querySelector(".form-login");

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && email === usuario.email && senha === usuario.senha) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha incorretos!");
    }
  });
}
