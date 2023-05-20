//Breo el objeto que va a contener los valores que ingrese por input
const datos = {
    cantidad: '',
    categoria: '',
};

//Asigno el valor de "estudiante" a la primera opcion del selecionador
var categoria;
datos.categoria = 'estudiante';

//Obtengo elementos del HTML
const cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
const totalAPagar = document.querySelector('#totalAPagar');
const btnResumen = document.querySelector('.btnResumen');
const btnBorrar = document.querySelector('.btnBorrar');
const formulario = document.querySelector('.formulario');

//Guardo los valores ingresados por input y select en el objeto creado anteriormente
cantidad.addEventListener('input', function(event){
    datos.cantidad = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

categoria.addEventListener('change', function(event){
    datos.categoria = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});

// Boton Borrar
btnBorrar.addEventListener('click' , function(event){
    event.preventDefault();
    var indice = 0;
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    formulario.reset();
    return;
});


// Boton Resumen
btnResumen.calcularMontoTotal ('click' , function(){
//Obtener la cantidad ingresada por el usuario
var cantidad = document.getElementById("cantidad").value;
//Obtener la categoria ingresada por el usuario
var categoria = document.getElementById("categoria").value;
//Calcular el monto total basado en la cantidad y la categoria sobre el valor base del ticket
var totalAPagar = cantidad * 200;
    //Aplicar descuento del 80% a estudiantes
    if(categoria == 'estudiante'){
       totalAPagar = (200*cantidad)*0.2;
    } 
    //Aplicar descuento del 50% a Trainee
    else if(categoria == 'trainee'){
        totalAPagar = (200*cantidad)*0.5;
    }
    //Aplica descuento del 15% para Juniors
    else if(categoria == 'junior'){
        totalAPagar = (200*cantidad)*0.85;
    }
    //Mostrar el monto total en la pantalla
    document.getElementById("totalAPagar").innerHTML = "Total a pagar: $" +totalAPagar.toFixed(2);
    
    console.log(totalAPagar);
});




