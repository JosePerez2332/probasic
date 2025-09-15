    const tareaInput = document.getElementById("tareaInput");
    const agregarBtn = document.getElementById("agregarBtn");
    const listaTareas = document.getElementById("listaTareas");

    // Cuando la página cargue, enfocar el input automáticamente
    window.onload = function () {
      tareaInput.focus();
    };


    // Función para agregar tarea
    function agregarTarea() {
      const textoTarea = tareaInput.value.trim();

      if (textoTarea === "") {
        alert("Por favor, escribe una tarea");
        return;
      }

      // Crear <li> y contenido
      const li = document.createElement("li");
      li.textContent = textoTarea;

      // Botón eliminar tiene el css comentado
      // const btnEliminar = document.createElement("button");
      // btnEliminar.textContent = "❌";
      // btnEliminar.classList.add("btn-eliminar");
      const btnEliminar = document.createElement("button");
      btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Ícono de basura
      btnEliminar.classList.add("btn-eliminar");

      // Eliminar tarea al hacer clic
      btnEliminar.addEventListener("click", function () {
        listaTareas.removeChild(li);
      });

      // Agregar botón al <li>
      li.appendChild(btnEliminar);

      // Agregar <li> a la lista
      listaTareas.appendChild(li);

      // Limpiar y enfocar el input
      tareaInput.value = "";
      tareaInput.focus();
    }

    // Evento para el botón
    agregarBtn.addEventListener("click", agregarTarea);

    // Evento para Enter
    tareaInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        agregarTarea();
      }
    });