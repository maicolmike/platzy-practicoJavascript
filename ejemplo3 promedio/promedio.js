// primera forma

const lista1 =
[
100,
200,
300,
400,
];

let sumaLista1 = 0;

for (let i=0; i < lista1.length; i++) 
{
sumaLista1= sumaLista1 + lista1 [i];
}

const promedioLista1 = sumaLista1 / lista1.length ;



// segunda forma crear funcion 

function calcularMediaAritmetica(lista) 
{
    let sumaLista = 0;

for (let i=0; i < lista1.length; i++) 
{
sumaLista= sumaLista + lista [i];
}

const promedioLista = sumaLista / lista.length ;
return promedioLista;

}

//tercera forma
function calcularMediaAritmetica2(lista) 
{
    const sumaLista2 = lista.reduce(
        function (valorAcumulado=0, nuevoElemento)
        { 
            return valorAcumulado + nuevoElemento;
        }
    );

const promedioLista = sumaLista2 / lista.length ;
return promedioLista;

}