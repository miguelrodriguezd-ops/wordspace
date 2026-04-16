// Ejercicio 4.5 — Validación de formulario
let usuario = "migue@gmail.com"; // Ejemplo: usuario vacío
let contrasena = "12345678"; // Ejemplo: contraseña corta

if (usuario === "") {
    console.log("Error: Usuario está vacío");
} else if (contrasena.length < 8) {
    console.log("Error: Contraseña debe tener al menos 8 caracteres");
} else {
    console.log("Login exitoso");
}