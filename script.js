let boton = document.getElementById("boton");
/* miBoton.onclick = nuevo; */
boton.addEventListener("click", nuevo);
function nuevo() {
    let iva = document.getElementById('iva').value;
    var iva1 = (iva) * 0.19;
    document.getElementById("demo").innerHTML =  '$ ' + iva1 + ' pesos';

    /* precio venta de producto + iva */
    let precioVenta1 = document.getElementById('ventaProducto').value;
    var iva2 = (precioVenta1) * 0.19;
    document.getElementById('venta').innerHTML = '$ ' + iva2 + ' pesos';
    
/*no resuelto la impresion */    var ivaTotal = iva2-iva1;
   
    document.getElementById('total1').innerHTML = '$ ' + ivaTotal + ' pesos'

}
/* tomando el id del boton-margen */
let boton2 = document.getElementById("boton-margen");

/* usando el metodo onlclick y ejecutando la function margen*/
boton2.addEventListener("click", margen);

 function margen(){
    
    /* obteniendo los valores de los input form2 */ 
    let ventaMargen = document.getElementById('venta-margen').value;
    let ventaCosto = document.getElementById('venta-costo').value;
    var margen = ventaMargen-ventaCosto;

     /*  tomando el id del parrafo de la salida par mostrar el resultado de la resta venta/costo/ margen*/ 
    document.getElementById('margenTotal').innerHTML = '$ ' + margen + ' pesos';

 }


