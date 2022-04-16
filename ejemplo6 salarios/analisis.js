const salariosCol = colombia.map
(
    function (personita)
    {
        return personita.salary;
    }
);
console.log ("Arrays con los salarios",salariosCol);
// ordenar
const salariosColSorted = salariosCol.sort 
(
    function (salaryA,salaryB)
    {
        return salaryA - salaryB;
    }
);
console.log ("Arrays con los salarios ordenados ",salariosColSorted);

function esPar(numerito)
{
    return (numerito % 2 === 0);
}
//funcion para calcular la media de salarios
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

function medianaSalarios (lista)
{
    const mitad = parseInt (lista.length/2);
    if (esPar(lista.length))
    {
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2,]);
        return mediana;
    }
    else 
    {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log ("Arrays mediana",medianaGeneralCol);

// mediana top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
console.log ("Comienzo",spliceStart);

const spliceCount = salariosColSorted.length - spliceStart;
console.log ("Final",spliceCount);

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
console.log ("Salarios top 10",salariosColTop10);

const medianaTop10col = medianaSalarios(salariosColTop10);
console.log ("Arrays mediana top10",medianaTop10col);

console.log ({medianaGeneralCol,medianaTop10col});