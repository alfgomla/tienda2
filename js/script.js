// Obtener el formulario y agregar un event listener
const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // Obtener los valores después de que el usuario los haya ingresado
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("listo");

    const credenciales = {
        username: username,
        password: password
    };

    fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credenciales)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
        
        // Mostrar mensaje de éxito o error
        const mensaje = document.getElementById("mensaje");
        if (data.token) {
            //mensaje.textContent = "Login exitoso!";
            //mensaje.style.color = "green";
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", username);

            setTimeout(() => {
                console.log(window.location.href);
                window.location.href = "tienda.html";
            }, 1000);
            mensaje.textContent = "Login exitoso! Redirigiendo...";
            mensaje.style.color = "green";        
        } else {
            mensaje.textContent = "Credenciales incorrectas";
            mensaje.style.color = "red";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Error de conexión";
        mensaje.style.color = "red";
    });
});
