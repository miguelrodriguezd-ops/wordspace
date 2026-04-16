///### Ejercicio 4.4 — Condiciones anidadas
///Declara las variables `edad` y `tienePermiso` (boolean). Imprime:

const edad = 18;
const tienePermiso = true;

if (edad >= 18) {
  console.log("Acceso permitido");
} else {
  if (tienePermiso) {
    console.log("Acceso permitido con permiso");
  } else {
    console.log("Acceso denegado");
  }
}