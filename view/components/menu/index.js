const menu = () => {
  const div = document.createElement("div");

  div.style.width = "100%";
  div.style.height = "8vh";
  div.style.background = "#2278fa";
  div.style.position = "absolute";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "space-around";

  const title = document.createElement("h1");
  title.textContent = "Meu Lar";
  title.style.color = "#fff";
  title.style.margin = 0;

  const login = document.createElement("div");

  const buttons = document.createElement("div");
  buttons.style.width = "50%";

  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.style.background = "transparent";
  loginButton.style.color = "#fff";
  loginButton.style.border = "none";
  loginButton.style.textTransform = "uppercase";
  loginButton.style.fontSize = "1rem";
  loginButton.style.fontFamily = "Open Sans";
  loginButton.style.fontWeight = "700";
  loginButton.style.textDecoration = "underline";
  loginButton.style.cursor = "pointer";
  loginButton.style.padding = "15px";
  loginButton.style.width = "10%";

  const registerButton = document.createElement("button");
  registerButton.textContent = "Registrar";
  registerButton.style.background = "transparent";
  registerButton.style.color = "#fff";
  registerButton.style.border = "none";
  registerButton.style.textTransform = "uppercase";
  registerButton.style.fontSize = "1rem";
  registerButton.style.fontFamily = "Open Sans";
  registerButton.style.fontWeight = "700";
  registerButton.style.textDecoration = "underline";
  registerButton.style.cursor = "pointer";
  registerButton.style.padding = "15px";
  registerButton.style.width = "10%";

  buttons.appendChild(loginButton);
  buttons.appendChild(registerButton);

  div.appendChild(title);
  div.appendChild(buttons);

  document.body.appendChild(div);
};

menu();
