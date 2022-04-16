// Código del cuadrado
console.group("Cuadrados");  // inicia el grupo de console cuadrados

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4 ;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cmˆ2");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();  // finaliza el grupo de console cuadrados

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diámetro
const diametroCirculo = radioCirculo * 2 ;
console.log("diametro del circulo es: " + diametroCirculo + " cm");
// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro es: " + perimetroCirculo + " cm");

// area
const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("el area es: " + areaCirculo + " cm2");

console.groupEnd();