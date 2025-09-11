const password = document.getElementById("password")

// logica para ver y ocultar contraseña

toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password"
    password.type = type ;
    toggle_password.classList.toggle("fa-eye")
    toggle_password.classList.toggle("fa-eye-slash")
});
   
function validar(){
    let password    = document.getElementById("password").value;
    let lowercase   = /[a-z]/.test(password);
    let uppercase   = /[A-Z]/.test(password);
    let number      = /\d/.test(password);
    let specialchar = /[\W_]/.test(password);
    if(password.length < 8){
        Swal.fire(
            "Error",
            "La contraseña debe tener al menos 8 caracteres.",
            "error"
        );

        return
    }
    if(specialchar && lowercase && uppercase && number){
        Swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones.",
            "success"
        );
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Contraseña Invalida",
            html: `
              <ul style="text-align:left; margin-left:20px;">
                  <li>${number ? "✅" : "❌" } Al menos un número</li>
                  <li>${lowercase ? "✅" : "❌" } Al menos una minúscula</li>
                  <li>${uppercase ? "✅" : "❌" } Al menos una mayúscula</li>
                  <li>${specialchar ? "✅" : "❌" } Al menos un caracter especial</li>
              </ul>   
            `
        });

    }
}
