// Código del cuadrado
console.group("Cuadrados");  // inicia el grupo de console cuadrados


function perimetroCuadrado (lado)
{
    return lado * 4;
}
var valorPerimetro = perimetroCuadrado(25);
console.log("el perimetro es " + valorPerimetro + " cm2");

function areaCuadrado (lado)
{
    return lado * lado;
}
var valorArea; 
valorArea= areaCuadrado(25);
console.log("el area es " + valorArea + " cm2");
console.groupEnd();  // finaliza el grupo de console cuadrados

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo (lado1 , lado2 , base)
{ 
    return (lado1+lado2+base);
}
var valorPerimetroTriangulo= perimetroTriangulo (10 , 10 , 10);
console.log("El perímetro del triángulo es: " + valorPerimetroTriangulo + "cm");

function areaTriangulo (baseTriangulo,alturaTriangulo)
{
    return (baseTriangulo * alturaTriangulo) / 2 ;
}
var valorAreaTriangulo= areaTriangulo (10 , 10);
console.log("El área del triángulo es: " + valorAreaTriangulo + "cmˆ2");
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo (radioCirculo) 
{
    return radioCirculo * 2 ;
}
var valorDiametroCirculo= diametroCirculo (10);
console.log("diametro del circulo es: " + valorDiametroCirculo + " cm");
// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// circunferencia
function perimetroCirculo (diametroCirculo,PI)
{
    return diametroCirculo * PI ;
}
var valorPerimetroCirculo= perimetroCirculo (10,PI);
console.log("el perimetro del circulo es: " + valorPerimetroCirculo + " cm");

// area
function areaCirculo (radioCirculo,PI)
{
    return (radioCirculo*radioCirculo)*PI;
}
var valorAreaCirculo= areaCirculo (10,PI);
console.log("el area del circulo es: " + valorAreaCirculo + " cm2");

console.groupEnd();

// aqui interectuamos con el html
function calcularPerimetroCuadrado ()
{
    const input = document.getElementById("inputCuadrado"); // tomo el input
    const value = input.value ; // tomo el valor del input
    const perimetro = perimetroCuadrado (value); //guardo lo que me returna la funcion
    alert ("El perimetro es: "+perimetro + " cm"); //imprimo un alerrt con lo que me trae 

}

function calcularAreaCuadrado ()
{
    const input = document.getElementById("inputCuadrado"); // tomo el input
    const value = input.value ; // tomo el valor del input
    const area = areaCuadrado (value); //guardo lo que me returna la funcion
    alert ("El area del cuadrado es: " + area +" cm2"); //imprimo un alerrt con lo que me trae 
}