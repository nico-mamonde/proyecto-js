const productos = [
{nombre : "vino", precio : 500 },
{nombre : "cerveza",precio : 1000 },
{nombre : "licor",precio : 2000 },
{nombre : "vodka",precio : 1800 },
{nombre : "gaseosa",precio : 2500 },
];

let carrito = []

let seleccion = prompt ("hola desea comprar alguna bebidas 'si' o 'no' ")
while ( seleccion!= "si" && seleccion != "no"){
alert ("por favor ingresa si o no ")
seleccion = prompt ("*hola desea comprar algo si o no")

}

if (seleccion == "si"){
    alert (" acontinuacion nuestra lista de bebidas") 
    for (let i = 0; i < productos.length; i++)
    console.log (productos[i]);

}
else if (seleccion == "no") {
    alert ("gracias por venir hasta pronto")
}

while(seleccion !="no") {
    let producto =prompt("agrega tus bebidas al carrito")
    let precio=0

    if (producto == "vino" || producto == "cerveza" ||producto == "licor" ||producto == "vodka" || producto == "gaseosa" ){
        switch (producto){
            case "vino":
           precio=500
               alert("Vinos tiene un costo de = $ "+ precio);
               break;
               case "cerveza":
                precio=1000
                    alert("cervezas tiene un costo de = $ "+ precio);
                    break;
                    case "licor":
                        precio=2000
                            alert("licores tiene un costo de = $ "+ precio);
                            break;
                            case "vodka":
                                precio=1800
                                    alert("vodka tiene un costo de = $ "+ precio);
                                    break;
                                    case "gaseosa":
                                        precio=2500
                                            alert("gaseosa tiene un costo de = $ "+ precio);
                                            break;
            default:
                alert("Operacion Invalida");
                break;
        }
        let unidades = parseInt (prompt("cuantas unidades quiere comprar?"))
        carrito.push ({producto,unidades,precio})
        console.log(carrito)

    }
else {alert("no tenemos ese producto")
}


seleccion = prompt ("desea comprar otra bebida?")
while(seleccion=== "no"){
alert ("gracias por la compra hasta pronto")

carrito.forEach((carritofinal) => {
    console.log("producto: " + carritofinal.producto + " unidades : "  + carritofinal.unidades + " total a pagar : $" + carritofinal.unidades * carritofinal.precio)
})

break;
}


}

