const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const btnValidar = document.getElementById("btn_validar");
const toggle_password = document.getElementById("toggle_password");
const toggle_confirm_password = document.getElementById("toggle_confirm_password");

function comprobarCoincidencia() {
    const passVal = passwordInput.value;
    const confirmVal = confirmPasswordInput.value;
    
    console.log("Pass:", passVal, "Confirm:", confirmVal);
    btnValidar.disabled = !(passVal !== "" && confirmVal !== "" && passVal === confirmVal);

    }

    passwordInput.addEventListener("input", comprobarCoincidencia);
    confirmPasswordInput.addEventListener("input", comprobarCoincidencia);

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

    btnValidar.addEventListener("click", () => {
      const passValue = passwordInput.value;
      const lowercase = /[a-z]/.test(passValue);
      const uppercase = /[A-Z]/.test(passValue);
      const number = /\d/.test(passValue);
      const specialchar = /[\W_]/.test(passValue);

      if (passValue.length < 8) {
        Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres.", "error");
        return;
      }

      if (specialchar && lowercase && uppercase && number) {
        Swal.fire("Correcto", "La contraseña cumple con las condiciones.", "success");
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
      }
    });