//Declaracion de array de objetos
let productos = [
    {nombre: "teclado", precio: 1200, stock: 8},
    { nombre: "Mouse", precio: 6000, stock: 10},
    {nombre: "Monitor", precio: 95000, stock: 3 },
];

//funcion que muestra el contenido del array de productos
function mostrarProductos ()
{
    console.clear();
    console.log("INVENTARIO ACTUAL");

    for (let i = 0; i<productos.length; i++)
    {
        console.log(`${i + 1}. ${productos[i].nombre} - PRECIO: $${productos[i].precio} - STOCK: ${productos[i].stock}`);
    }
}

function reponerStock()
{
    mostrarProductos();
    let index;

    do
    {
        index = parseInt(prompt("Ingrese el numero del producto a reponer: ")) - 1;

        if (index < 0 || index >= productos.length)
        {
            alert("Error, producto invalido");
        }
    }while (index < 0 || index >= productos.length);

    let cantidad;
    
    do
    {
        cantidad = parseInt(prompt("Ingrese la cantidad a agregar: "));
        if (isNaN(cantidad) || cantidad <= 0)
        {
            alert("Error, cantidad invalida");
        }
    }while (isNaN(cantidad) || cantidad <= 0);

    productos[index].stock += cantidad;

    alert(`Nuevo stock de ${productos[index].nombre}: ${productos[index].stock}`);
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del nuevo producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let stock = parseInt(prompt("Ingrese el stock inicial:"));

    if (!nombre || isNaN(precio) || isNaN(stock) || precio <= 0 || stock < 0) {
        alert("Datos inválidos. Intente nuevamente.");
        return;
    }

    productos.push({ nombre, precio, stock });
    alert(`Producto "${nombre}" agregado correctamente.`);
}

function actualizarPrecio () {
    mostrarProductos();

    let index;

    do
    {
        
        index = parseInt (prompt("Ingrese el número del producto a modificar: ")) - 1;
        if (index < 0 || index >= productos.length)
        {
            alert("Error, producto invalido");
        }
    }while(index < 0 || index >= productos.length);

    let precioNuevo;

    do
    {
        parseInt(prompt("Ingrese el numero del producto a reponer: "));
    }while(precioNuevo < 0);

    productos[index].precio = precioNuevo;
}
//modificar if por do while
function eliminarProducto ()
{
     mostrarProductos();
    let index;

    do
    {
        index = parseInt(prompt("Ingrese el número del producto a eliminar:")) - 1;
        if (index < 0 || index >= productos.length)
        {
            alert("Producto invalido")
        }
    }while(index < 0 || index >= productos.length);

    //confirm retorna true si se clikea OK
    let confirmar = confirm(`¿Seguro que desea eliminar "${productos[index].nombre}"?`);
    
    if (confirmar) {
        productos.splice(index, 1);
        alert("Producto eliminado correctamente.");
    }
}

//funcion para mostrar un menu en consola
function mostrarMenu()
{
    let opcion;

    do
    {
        mostrarProductos();
        opcion = prompt(
            "MENÚ DE GESTIÓN DE INVENTARIO\n"+
            "1- Agregar producto \n" +
            "2- Reponer Stock\n" +
            "3 - Actualizar precio \n" +
            "4 - Elminar producto \n" + 
            "5 - Ver productos \n" +
            "6 - Salir \n\n" +
            "Por favor, seleccione una opción (1-6): "
        );
        switch (opcion)
        {
            case "1":
                agregarProducto();
                break;
            case "2":
                reponerStock();
                break;
            case "3":
                actualizarPrecio();
                break;
            case "4":
                eliminarProducto ();
                break;
            case "5":
                mostrarProductos();
                break;
            case "6":
                alert("Finalizando...");
                break;
        }
    }while(opcion !== "6");
}

alert("Bienvenido al sistema de gestión de inventario");
mostrarMenu();