//PENDIENTE : Hacer algunas funciones de orden superior como "mayorQue() , "



//CLASES 
class Producto {
    constructor(numero , nombre , precio ){
        this.numero = numero,
        this.nombre= nombre,
        this.precio= parseFloat(precio)
        this.cantidad = 0  
    }
    mostrarProducto(){
        
        alert(`PRODUCTO N°${this.numero}
PRODUCTO: ${this.nombre} 
PRECIO: ${this.precio} `

        )
        
    }
}

let producto1 = new Producto(0,"leche" , 1500);
let producto2 = new Producto(1,"manteca",1220);

//VARIABLES GLOBALES :
let listaProductos = [producto1 , producto2]




//FUNCIONES 



function agregarProducto(){
    let nombreProd = prompt("Ingrese el nombre del producto").toLowerCase();
  
    
 if(evaluarNombreProducto(nombreProd)== true){
    alert("Producto ya ingresado.")
}else{
    let precioProd = prompt("Ingrese precio del producto")
    
    let productoNuevo=new Producto(listaProductos.length + 1 , nombreProd , precioProd);

    listaProductos.push(productoNuevo)

}
    


function evaluarNombreProducto(nombre){
    let resultado 
     resultado = listaProductos.some((elemento) => elemento.nombre == nombre)

   
    
    return resultado;
}
    
   
}

function mostrarListaProductos(lista){
    if(lista.length == 0){
        alert("Lista vacia")
    }else{
        let listaProductos = "Lista de productos:\n"

        for(let i = 0 ; i < lista.length ; i++){
            let producto = lista [i]
            listaProductos+=`${i + 1}. ${producto.nombre}: $${producto.precio} \n`
        }
        alert(listaProductos);
        
     
    }

    
        
    
    
}

function borrarProducto(lista){
    let productoBorrado = prompt("Ingrese el Producto a borrar")
    let busqueda = lista.filter(
        (Producto)=> Producto.nombre.toLowerCase() != productoBorrado.toLowerCase()
    )
    lista = busqueda 
   return lista;

}

function hacerListaProductosString(lista){
    let listaProductos = "Lista : \n";

    for(let i = 0 ; i < lista.length ; i++){
        let producto = lista [i]
        
            listaProductos+=`${i + 1}. ${producto.nombre}: $${producto.precio} \n`
        
       
    }
    return listaProductos;
}

function totalDeCarrito(lista){
    const total = lista.reduce((acumulador , lista)=>acumulador + (lista.precio * lista.cantidad)
    ,0)
    return total;
}

function hacerListaCarrito(carrito){
    let listaCarrito= "Carrito de compras :\n"
    let total = totalDeCarrito(carrito);
    let opcion 
    if(carrito.length == 0){
        alert("Carrito sin productos")
        return;
    }else{
        for(let i = 0 ; i < carrito.length ; i++){
            let producto = carrito [i]
            listaCarrito+=`${i + 1}. ${producto.nombre}: $${producto.precio * producto.cantidad} , ${producto.cantidad}  \n`
    
        }
            listaCarrito += `TOTAL = $${total}`
        
       do{
        opcion = parseInt(prompt(`${listaCarrito}\n¿Desea calcular costo de envio? \n1.SI \n2.NO`));
        if(opcion == 1 ){
            let costoDeEnvio = costoEnvio();
            listaCarrito+=`\nCOSTO DE ENVIO = $${costoDeEnvio}. \nTOTAL CON ENVIO = $${total+costoDeEnvio}.`
            alert(listaCarrito)
        }else if (opcion== 2){
            alert(listaCarrito);
        }else{
            alert("Opcion invalida")
        }
       }while(opcion !=1 && opcion !=2)
    }
   
   
    

}

function carrito(lista){
    let carrito = [];
    let opcion
   
    listaString = hacerListaProductosString(lista)
  
    

    do{
        opcion= parseInt(prompt(`elija el producto: \n${listaString}Para terminar la compra ingrese el 0.`))
        //AGARRA EL OBJETO EN LA POSICION QUE LE INDICO
        if(opcion > 0 && opcion <=lista.length){
            let pinza = lista [opcion- 1 ]
            

            do{
                pinza.cantidad = parseInt(prompt(`Cuanto va a querer de ${pinza.nombre} : `))
                if(pinza.cantidad == 0){
                    alert("Opcion invalida.Vuelva a ingresar cantidad")
                }else{
                    carrito.push(pinza);
                }
            }while(pinza.cantidad == 0)
            
            

        }
    }while (opcion != 0)
   
    return hacerListaCarrito(carrito);
    

}

function costoEnvio(){
    let distancia 
    let costoDelEnvio
    do{distancia=parseFloat(prompt("Ingrese distancia en kilometros menor a 1000Km."))
        if(distancia <= 0){
            alert("Distancia invalida")
        }else if(distancia > 1000){
            alert("Esta distancia supera nuestro limite de entregas.Por Favor seleccione una distancia menor a 1000Km.")
        }else if(distancia >=900 && distancia <1000){

            costoDelEnvio = 1500

        }else if (distancia >=400 && distancia <900){ 

            costoDelEnvio = 1000

        }else if (distancia >0 && distancia < 400){

            costoDelEnvio = 500

        }

    }while(distancia <= 0 )
    return costoDelEnvio;
}


//MENU
do{entrada = parseInt(prompt(`Ingrese la opción deseada
1 - Agregar Producto
2 - Borrar Producto
3 - Consultar lista
4 - Comprar
0 - Salir del menu`))

    
switch(entrada){
         case 0:
              alert("Simulador finalizado")
             break;
         case 1: 
         agregarProducto();
         break;

         case 2:
            listaProductos=borrarProducto(listaProductos)
       
         break;
         case 3:
            mostrarListaProductos(listaProductos)
         break;
        
         case 4:
             carrito(listaProductos)
         break;
            
         default:
       alert("Opción inválida. Por favor, selecciona una opción válida.");
    } 
}while( entrada != 0)