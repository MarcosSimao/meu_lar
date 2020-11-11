const recoverButton = document.getElementById("recover");

const recover = async (evt) => {
  evt.preventDefault();
  const email = document.getElementById("email");

  setTimeout(() => {
    window.location.href = "../working/";
  }, 2000);
};

recoverButton.addEventListener("click", (evt) => recover(evt));
