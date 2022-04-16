function calcularMediaAritmetica(lista) 
{
    const sumaLista = lista.reduce(
    function (valorAcumulado=0, nuevoElemento)
        { 
            return valorAcumulado + nuevoElemento;
        }
    );
const promedioLista = sumaLista / lista.length ;
return promedioLista;
}

const lista1 = 
[
    100,
    200,
    400,
    500
];
console.log(lista1);

const mitadLista1= parseInt(lista1.length/2);  // posicion en la lista donde esta la mitad
console.log("Posision ",mitadLista1);

// funcion para saber si es par o impar
function esPar(numerito)
{
    if (numerito % 2 ===0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

let mediana;
// indicar el valor de la mitad segun su pocision
if (esPar(lista1.length))
{
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica
    ([
        elemento1,
        elemento2,
    ]);
    mediana= promedioElemento1y2;
}
else 
{
    mediana= lista1[mitadLista1];
}
console.log("Valor mediana ",mediana);