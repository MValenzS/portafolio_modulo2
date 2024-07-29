$(document).ready(function(){
    $('#skills li').hover(
        function() {
            $(this).css('background-color', '#96C9F4'); 
        }, 
        function() {
            $(this).css('background-color', '#ccdff2'); 
        }
    );
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    var modal = document.getElementById("modalForm");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("contactForm");

 //clic en (x) para cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Validar y mostrar el modal al enviar el formulario
    form.onsubmit = function(event) {
        // Evitar el envío real del formulario
        event.preventDefault(); 

        // Validar los campos
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name && email && message) {
            // Mostrar el modal
            modal.style.display = "block";
            //form.reset();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    }
});
