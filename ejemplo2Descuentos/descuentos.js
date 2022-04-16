function calcularPrecioDescuento (precio, descuento)
{
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento)/100;
    
    return precioConDescuento;

}

function onclickPrecio()
{
    const inputPrecio = document.getElementById("inputPrecio"); // lo que esta dentro de getElementById("inputPrecio") hace referencia al id del input en el html
    const valorPrecio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const valorDescuento = inputDescuento.value;


    const precioDescuento = calcularPrecioDescuento (valorPrecio, valorDescuento);
    const result = document.getElementById("result");
    result.innerText = "El precio con descuento son: $ " + precioDescuento ;

}