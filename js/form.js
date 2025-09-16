// Obtener el formulario
const form = document.getElementById("registroForm");

// Definir todos los campos y sus validaciones
const campos = {
  nombre: {
    input: document.getElementById("nombre"),
    error: document.getElementById("error_nombre"),
    validar: val => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val.trim()),
    mensaje: "Ingrese un nombre válido (solo letras)"
  },
  apellidos: {
    input: document.getElementById("apellidos"),
    error: document.getElementById("error_apellidos"),
    validar: val => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val.trim()),
    mensaje: "Ingrese apellidos válidos (solo letras)"
  },
  telefono: {
    input: document.getElementById("telefono"),
    error: document.getElementById("error_telefono"),
    validar: val => /^\d{10}$/.test(val.trim()),
    mensaje: "Ingrese un número de teléfono válido (10 dígitos)"
  },
  correo: {
    input: document.getElementById("correo"),
    error: document.getElementById("error_correo"),
    validar: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
    mensaje: "Ingrese un correo válido"
  },
  tipo_id: {
    input: document.getElementById("tipo_id"),
    error: document.getElementById("error_tipo_id"),
    validar: val => val !== "",
    mensaje: "Seleccione un tipo de identificación"
  },
  numero_id: {
    input: document.getElementById("numero_id"),
    error: document.getElementById("error_numero_id"),
    validar: val => /^\d+$/.test(val.trim()),
    mensaje: "Ingrese solo números"
  },
  sexo: {
    input: document.getElementById("sexo"),
    error: document.getElementById("error_sexo"),
    validar: val => val !== "",
    mensaje: "Seleccione una opción"
  },
  fecha_nacimiento: {
    input: document.getElementById("fecha_nacimiento"),
    error: document.getElementById("error_fecha"),
    validar: val => val !== "",
    mensaje: "Seleccione una fecha válida"
  },
  password: {
    input: document.getElementById("password"),
    error: document.getElementById("error_password"),
    validar: val => /^\d+$/.test(val),
    mensaje: "La contraseña debe contener solo números"
  },
  confirm_password: {
    input: document.getElementById("confirm_password"),
    error: document.getElementById("error_confirm_password"),
    validar: val => val === document.getElementById("password").value && val !== "",
    mensaje: "Las contraseñas no coinciden"
  }
};

// Validar un solo campo
function validarCampo(campo) {
  const valor = campo.input.value;
  if (!campo.validar(valor)) {
    campo.error.textContent = campo.mensaje;
    return false;
  } else {
    campo.error.textContent = "";
    return true;
  }
}

// Limpiar errores
function limpiarErrores() {
  for (let key in campos) {
    campos[key].error.textContent = "";
  }
  actualizarResumen();
}

// Actualizar la bandeja de resumen
function actualizarResumen() {
  const resumen = document.getElementById("listaResumen");
  const icono = (valido) =>
    `<i class="fas ${valido ? 'fa-check-circle ok' : 'fa-times-circle error'} icono-estado"></i>`;

  resumen.innerHTML = `
    <li><span><strong>Nombre:</strong> ${campos.nombre.input.value}</span> ${icono(validarCampo(campos.nombre))}</li>
    <li><span><strong>Apellidos:</strong> ${campos.apellidos.input.value}</span> ${icono(validarCampo(campos.apellidos))}</li>
    <li><span><strong>Teléfono:</strong> ${campos.telefono.input.value}</span> ${icono(validarCampo(campos.telefono))}</li>
    <li><span><strong>Correo:</strong> ${campos.correo.input.value}</span> ${icono(validarCampo(campos.correo))}</li>
    <li><span><strong>Tipo ID:</strong> ${campos.tipo_id.input.value}</span> ${icono(validarCampo(campos.tipo_id))}</li>
    <li><span><strong>Número ID:</strong> ${campos.numero_id.input.value}</span> ${icono(validarCampo(campos.numero_id))}</li>
    <li><span><strong>Sexo:</strong> ${campos.sexo.input.value}</span> ${icono(validarCampo(campos.sexo))}</li>
    <li><span><strong>Fecha Nacimiento:</strong> ${campos.fecha_nacimiento.input.value}</span> ${icono(validarCampo(campos.fecha_nacimiento))}</li>
    <li><span><strong>Contraseña:</strong> ${'*'.repeat(campos.password.input.value.length)}</span> ${icono(validarCampo(campos.password))}</li>
    <li><span><strong>Confirmación:</strong> ${'*'.repeat(campos.confirm_password.input.value.length)}</span> ${icono(validarCampo(campos.confirm_password))}</li>
  `;
}

// Validación en tiempo real
for (let key in campos) {
  const tipoEvento = campos[key].input.tagName === "SELECT" ? "change" : "input";
  campos[key].input.addEventListener(tipoEvento, () => {
    validarCampo(campos[key]);
    if (key === "password" || key === "confirm_password") {
      validarCampo(campos["confirm_password"]);
    }
    actualizarResumen();
  });
}

// Mostrar / Ocultar contraseña
document.querySelectorAll(".toggle-password").forEach(icono => {
  icono.addEventListener("click", () => {
    const inputId = icono.getAttribute("data-target");
    const input = document.getElementById(inputId);

    const esPassword = input.type === "password";
    input.type = esPassword ? "text" : "password";
    icono.classList.toggle("fa-eye");
    icono.classList.toggle("fa-eye-slash");
  });
});

// Envío del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let todoValido = true;

  for (let key in campos) {
    if (!validarCampo(campos[key])) {
      todoValido = false;
    }
  }

  actualizarResumen();

  if (todoValido) {
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado correctamente',
      text: 'Todos los campos han sido validados.',
      confirmButtonText: 'Aceptar'
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Formulario con errores',
      text: 'Revisa los campos marcados con ❌',
      confirmButtonText: 'Corregir'
    });
  }
});