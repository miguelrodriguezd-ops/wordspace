///### Ejercicio 4.2 — if / else if / else
///Usando la misma variable `nota`, imprime una escala de calificaciones:

const nota = 7;

if (nota >= 0 && nota < 5) {
  console.log("Insuficiente");

} else if (nota < 7) {
  console.log("Suficiente");

} else if (nota < 9) {
  console.log("Bien");

} else if (nota < 10) {
  console.log("Notable");
  
} else {
  console.log("Sobresaliente");
}