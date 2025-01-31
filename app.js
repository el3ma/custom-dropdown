document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const button = document.querySelector('.dropdown-button');
    const options = document.querySelectorAll('.dropdown-content div');
    const upIcon = document.querySelector('.up-icon');
    const downIcon = document.querySelector('.down-icon');
    
    // Abrir/cerrar el menú al hacer clic en el botón
    button.addEventListener('click', function(){
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            upIcon.style.display = 'block';
            downIcon.style.display = 'none';
        } else {
            upIcon.style.display = 'none';
            downIcon.style.display = 'block';
        }
    });

    // Seleccionar una opción
    options.forEach(option => {
        option.addEventListener("click", function () {
            // Remover el ticket de aprobación de todas las opciones
            options.forEach(opt => {
                opt.querySelector('.ticket')?.remove(); // Elimina el ticket si existe
            });

            // Agregar el ticket de aprobación a la opción seleccionada
            const ticket = document.createElement('span');
            ticket.classList.add('ticket');
            ticket.textContent = ' ✔️'; 
            this.appendChild(ticket);

            // Actualizar el texto del botón con la opción seleccionada (sin el ticket)
            button.textContent = this.textContent.replace(' ✔️', '').trim(); // Elimina el ticket si está presente
            dropdown.classList.remove("active"); // Cerrar el menú
            upIcon.style.display = 'none';
            downIcon.style.display = 'block';
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
            upIcon.style.display = 'none';
            downIcon.style.display = 'block';
        }
    });

});