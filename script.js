const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const confPass = document.getElementById("confPass");

function emptyValidation(input) {
    const inputMsg = input.id + 'Msg';
    const element = document.getElementById(input.id);
    const elementMsg = document.getElementById(inputMsg);
    const iconSpan = document.createElement("span");
    const icon = element.parentNode.appendChild(iconSpan);

    if (element.value == "") {
        element.classList.add("errInput");
        icon.classList.add("errIcon");
        elementMsg.textContent = "Por favor, complete este campo.";
        input.focus();
    } else {
        element.classList.add("successInput");
        icon.classList.add("successIcon");
        elementMsg.textContent = "";
    }
}

function validateForm(event) {
    event.preventDefault();
    
    emptyValidation(name);
    emptyValidation(email);
    emptyValidation(password);
    emptyValidation(confPass);
    
    if (password.value.length > 8) {
        passMsg.textContent = "La clave no puede tener más de 8 caracteres.";
        password.focus();
    }

    if (confPass.value !== password.value) {
        confPassMsg.textContent = "Las claves no coinciden.";
        confPass.focus();
    }
}
