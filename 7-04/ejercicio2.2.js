
let a = 10;
let b = 5;


console.log("a == b:", a == b);   
console.log("a === b:", a === b); 
console.log("a != b:", a != b);   
console.log("a !== b:", a !== b); 
console.log("a > b:", a > b);     
console.log("a < b:", a < b);    
console.log("a >= b:", a >= b);   
console.log("a <= b:", a <= b);   


console.log("5 == '5':", 5 == "5");   
console.log("5 === '5':", 5 === "5"); 

// La diferencia entre == y === es que == realiza coerción de tipos (convierte los valores a un tipo común antes de comparar),
// mientras que === compara tanto el valor como el tipo sin coerción. Por eso, 5 == "5" es true (el string "5" se convierte a número),
// pero 5 === "5" es false (número no es igual a string).
