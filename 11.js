        const nombreInput = document.querySelector("#nombre");
        const profesionInput = document.querySelector("#profesion");
        const boton = document.querySelector("#crear");
        const contenedor = document.querySelector("#contenedor");

        boton.addEventListener("click", function() {


            const nombre = nombreInput.value;
            const profesion = profesionInput.value;

            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            const textoNombre = document.createElement("h2");
            textoNombre.textContent = nombre;

            const textoProfesion = document.createElement("p");
            textoProfesion.textContent = profesion;

            tarjeta.appendChild(textoNombre);
            tarjeta.appendChild(textoProfesion);

            contenedor.appendChild(tarjeta);

            nombreInput.value = "";
            profesionInput.value = "";
        });