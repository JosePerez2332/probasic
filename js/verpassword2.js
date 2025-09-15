const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const btnValidar = document.getElementById("btn_validar");
const toggle_password = document.getElementById("toggle_password");
const toggle_confirm_password = document.getElementById("toggle_confirm_password");
const mensajeValidacion = document.getElementById("mensaje_validacion");

function comprobarCoincidencia() {
  const passVal = passwordInput.value;
  const confirmVal = confirmPasswordInput.value;

  const coinciden = passVal !== "" && confirmVal !== "" && passVal === confirmVal;
  btnValidar.disabled = !coinciden;

  // Limpiar clases previas
  btnValidar.classList.remove("correcto", "incorrecto");
  mensajeValidacion.textContent = "";
}

// Listeners para verificar coincidencia mientras se escribe
passwordInput.addEventListener("input", comprobarCoincidencia);
confirmPasswordInput.addEventListener("input", comprobarCoincidencia);

// Toggle de visibilidad de contraseña
toggle_password.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  toggle_password.classList.toggle("fa-eye");
  toggle_password.classList.toggle("fa-eye-slash");
});

toggle_confirm_password.addEventListener("click", () => {
  const type = confirmPasswordInput.type === "password" ? "text" : "password";
  confirmPasswordInput.type = type;
  toggle_confirm_password.classList.toggle("fa-eye");
  toggle_confirm_password.classList.toggle("fa-eye-slash");
});

// Validación al hacer clic
btnValidar.addEventListener("click", () => {
  const passValue = passwordInput.value;
  const lowercase = /[a-z]/.test(passValue);
  const uppercase = /[A-Z]/.test(passValue);
  const number = /\d/.test(passValue);
  const specialchar = /[\W_]/.test(passValue);

  // Limpiar clases previas
  btnValidar.classList.remove("correcto", "incorrecto");

  if (passValue.length < 8) {
    Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres.", "error");
    btnValidar.classList.add("incorrecto");
    mensajeValidacion.textContent = "Contraseña demasiado corta";
    mensajeValidacion.style.color = "red";
    return;
  }

  if (specialchar && lowercase && uppercase && number) {
    Swal.fire("Correcto", "La contraseña cumple con las condiciones.", "success");
    btnValidar.classList.add("correcto");
    mensajeValidacion.textContent = "Contraseña válida";
    mensajeValidacion.style.color = "green";
  } else {
    Swal.fire({
      icon: "error",
      title: "Contraseña Inválida",
      html: `
        <ul style="text-align:left; margin-left:20px;">
            <li>${number ? "✅" : "❌"} Al menos un número</li>
            <li>${lowercase ? "✅" : "❌"} Al menos una minúscula</li>
            <li>${uppercase ? "✅" : "❌"} Al menos una mayúscula</li>
            <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
        </ul>   
      `,
    });
    btnValidar.classList.add("incorrecto");
    mensajeValidacion.textContent = "La contraseña no cumple con los requisitos";
    mensajeValidacion.style.color = "red";
  }
});