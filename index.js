const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  const confPass = document.getElementById("confPass");
  const inputs = [name, email, password, confPass];

  inputs.map((input) => {
    let message = "";
    let alertF = false;
    let err = true;

    if (input.value == "") {
      message = "Por favor, rellene este campo.";
    } else if (input.id === "email" && !emailRegExp.test(input.value)) {
      message = "Por favor, introduce un email válido.";
    } else if (input.id === "pass" && input.value.length > 8) {
      message = "La clave no puede tener más de 8 caracteres.";
    } else if (input.id === "confPass" && password.value !== confPass.value) {
      message = "Las claves no coinciden.";
    } else {
      err = false;
      message = "";
      alert = true;
    }

    showValidation(input, message, err);

    if (alertF) {
      alert("Formulario enviado satisfactoriamente");
    }
  });
}

function showValidation(input, message, err) {
  let inputClass = err ? "errInput" : "successInput";
  let iconClass = err ? "errIcon" : "successIcon";
  const elementMsg = document.getElementById(input.id + "Msg");

  if (input.nextElementSibling === null) {
    let icon = document.createElement("span");
    input.insertAdjacentElement("afterend", icon);
  }

  if (input.nextElementSibling) {
    input.nextElementSibling.className = iconClass;
  }

  input.className = inputClass;
  elementMsg.textContent = message;
  input.focus();
}
