// se crea una array
const lista1 = [
1,
2,
3,
2,
3,
1,
3,
3,
4
];

console.log ("Lista ",lista1); // imprimimos por consola el array

//creamos un objeto
const lista1Count = {};

lista1.map
(
    function (elemento)
    {
        if (lista1Count[elemento])  // a la variable le enviamos datos del array para que los compare
        {
            lista1Count[elemento] += 1; // si lo encuentra le suma 1 si lo vuelve a encontrar suma lo que esta mas 1 
        }
        else 
        {
            lista1Count[elemento] = 1; // sino lo encuentra asume que tiene solo 1
        }
    }
);

console.log ("El objeto",lista1Count); // imprimo por consola el objeto

// convertir un objeto en array
const lista1Array = Object.entries(lista1Count).sort  // con el metodo sort se ordena de menoar a mayor
(
    function (elementoA, elementoB)
    {
        return elementoA[1] - elementoB[1];
    }
);
console.log ("El array de array ordenado",lista1Array); // imprimir lista1Array en consola


const moda = lista1Array[lista1Array.length-1]; // imprimir el ultimo elemento del array

console.log ("La moda ",moda); // imprimir moda en consola