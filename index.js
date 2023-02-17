const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function showValidation(input, message, iconClass, inputClass) {
    const icon = input.nextElementSibling;
    const inputMsg = input.id + 'Msg';
    const elementMsg = document.getElementById(inputMsg);

    input.className=inputClass;
    icon.className = iconClass;
    elementMsg.textContent = message;
    input.focus();
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    const confPass = document.getElementById("confPass");

    const inputs = [name, email, password, confPass];

    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    inputs.map((input) => {
        let inputClass = "errInput";
        let iconClass = "errIcon";
        let message = "";
        let alertF = false;

        if(input.value == ""){
            iconClass= "errIcon";
            inputClass = "errInput";
            message = "Por favor, rellene este campo."
        } else if(input.id === "email" && !emailRegExp.test(input.value)) {
            iconClass= "errIcon";
            inputClass = "errInput";
            message = "Por favor, introduce un email válido.";
        } else if (input.id === "pass" && input.value.length > 8) {
            iconClass= "errIcon";
            inputClass = "errInput";
            message = "La clave no puede tener más de 8 caracteres.";
        } else if (input.id === 'confPass' && password.value !== confPass.value) {
            iconClass= "errIcon";
            inputClass = "errInput";
            message =  "Las claves no coinciden.";
        }else{
            iconClass = "successIcon";
            inputClass = "successInput";
            message = "";
            alert = true;

        }

        showValidation(input, message, iconClass, inputClass);

        if(alertF) {alert("Formulario enviado satisfactoriamente")}
    })


    


}

