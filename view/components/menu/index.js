const menu = () => {
  const div = document.createElement("div");
  div.classList.add("menu");

  let showLogin = false;
  let showRegister = false;

  const title = document.createElement("a");
  title.classList.add("title");
  title.href = "/";
  title.textContent = "Meu Lar";

  const login = document.createElement("div");
  login.classList.add("login");

  const register = document.createElement("div");
  register.classList.add("register");

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.classList.add("loginButton");

  const registerButton = document.createElement("button");
  registerButton.textContent = "Registrar";
  registerButton.classList.add("registerButton");

  const linkToRegister = document.createElement("a");
  linkToRegister.href = "./view/pages/register";
  linkToRegister.textContent = "Registro";
  linkToRegister.classList.add("link");

  const linkToRegisterOng = document.createElement("a");
  linkToRegisterOng.href = "../view/pages/registerOng";
  linkToRegisterOng.textContent = "Registro de Ongs";
  linkToRegisterOng.classList.add("link");

  const linkToRegisterLar = document.createElement("a");
  linkToRegisterLar.href = "../view/pages/registerLar";
  linkToRegisterLar.textContent = "Registro de Lares Temporários";
  linkToRegisterLar.classList.add("link");

  const linkToLogin = document.createElement("a");
  linkToLogin.href = "./view/pages/login";
  linkToLogin.textContent = "Login";
  linkToLogin.classList.add("link");

  const linkToLoginOng = document.createElement("a");
  linkToLoginOng.href = "../view/pages/loginOng";
  linkToLoginOng.textContent = "Login de Ongs";
  linkToLoginOng.classList.add("link");

  const linkToLoginLar = document.createElement("a");
  linkToLoginLar.href = "../view/pages/loginLar";
  linkToLoginLar.textContent = "Login de Lares Temporários";
  linkToLoginLar.classList.add("link");

  registerButton.addEventListener("click", () => {
    showLogin = false;
    login.style.display = "none";
    showRegister = !showRegister;

    if (showRegister) {
      register.style.display = "block";
      register.style.display = "flex";
      register.style.flexDirection = "column";
    } else {
      register.style.display = "none";
    }
  });

  loginButton.addEventListener("click", () => {
    showRegister = false;
    register.style.display = "none";
    showLogin = !showLogin;

    if (showLogin) {
      login.style.display = "block";
      login.style.display = "flex";
      login.style.flexDirection = "column";
    } else {
      login.style.display = "none";
    }
  });

  register.appendChild(linkToRegister);
  register.appendChild(linkToRegisterOng);
  register.appendChild(linkToRegisterLar);

  login.appendChild(linkToLogin);
  login.appendChild(linkToLoginOng);
  login.appendChild(linkToLoginLar);

  buttons.appendChild(loginButton);
  buttons.appendChild(registerButton);

  div.appendChild(title);
  div.appendChild(buttons);
  div.appendChild(login);
  div.appendChild(register);

  document.body.appendChild(div);
};

menu();
