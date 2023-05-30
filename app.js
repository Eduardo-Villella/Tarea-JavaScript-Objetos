//creando tres objetos diferentes con sus atributos y sus metodos

const libro = {//ejemplo para un tipo de objeto en librerias (visto desde el lado cliente)
    id: "1p",
    titulo: "Tigre, tigre.",
    autor: "Alfred Bester",
    genero: "ciencia ficcion",
    precio: 3200,
    stock: 16,
    mimarca: [],/* marca = [leido, comprado, pedido, descartado] no sé si hacer un array o dejar un atributo vacio para luego poder ponerle una marca personal segun el interes del usuario*/

    pedir: function () {
        console.log("pedir libro si no esta en stock")
    },
    comprar: function () {
        console.log("comprando libro")
    },
    marcar: function () {
        console.log("marcar como: ", mimarca)
    },
}

const remedio = {//ejemplo para un tipo de objeto en  farmacia (visto del lado negocio)
    id: "1p",
    nombre: "Pancita feliz",
    laboratorio: "Bago",
    caregotia: "malestar estomacal",
    publico: "infantil",
    necereceta: true,
    precio: 3200,
    stock: 1,
    observaciones: " algo que decir sobre el producto",

    pedir: function () {
        console.log("pedir remedio al laboratorio si falta stock")
    },
    ventas: function () {
        console.log("total vendido")
    },
    controlar: function () {
        console.log("pidiendo receta")
    },
    otras: function () {
        console.log("agrgar funciones que ahora no se ocurren jaja")
    }

}

const mislibros = {//ejemplo para un tipo de objeto en mi bibioteca personal
    id: "1p",
    titulo: "El problemna de los tres cuerpos",
    categoria: "saga trilogia",
    saga: "El recuerdo del pasado de la Tierra",
    autor: "Liu Cixin",
    genero: "ciencia ficcion",
    subgenero: "ciencia ficcion",
    mimarca: "leido",
    formato: "fisico",
    condicion: "usado",
    buenestado: true,
    observaciones: "en buenas condiciones, no hace falta comprar nuevo",
    comentarios: "faltan dos de la saga",


    agregar: function () {
        console.log("agregando nuevo libro a mi base de datos")
    },
    eliminar: function () {
        console.log("eliminando libro prestado y no devuelto")
    },
    modificar: function () {
        console.log("aca me meti en un brete porque no se como modificar si solo quiero modificar un atributo")
    },
    comprar: function () {
        console.log("comprando libro ")// comprar depende no solo si falta alguno de la saga o quiero agregar otro libro, puede depender ademas de "buenestado" o "condicion" o "formato", etc
    }
   
}
console.log("Objeto libro de libreria virtual visto por parte del cliente:");
console.log(libro.titulo + ", " + libro.precio);
console.log("   -   ")// no recuerdo como dejar espacio en js y ahora no hay tiempo jaja buscar
console.log("Objeto remedio de farmacia visto por parte del vendedor");
console.log(remedio.nombre + ", " + remedio.laboratorio + ", " + remedio.stock);
    remedio.pedir();
console.log("   -   ")
console.log("Objeto libro de mi biblioteca personal");    
console.log(mislibros.titulo + ", " + mislibros.categoria + ", " + mislibros.comentarios )
    mislibros.comprar();
