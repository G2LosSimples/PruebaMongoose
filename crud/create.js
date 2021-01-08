require ("../conexion");
const libro = require ("../models/libro");

/*const crearLibros = async() => {
    const libro1 = new libro ({
        title: "Fray Perico y su borrico",
        author: "Juan Muñoz",
        description: "El Fray montado en un borrico lo peta máximo"
    });
    await libro1.save();
};*/

const crearLibros = async(titulo, autor, descripcion) => {
    let libro1 = new libro ({
        title: titulo,
        author: autor,
        description: descripcion
    });
    await libro1.save();
};

crearLibros("Quijote", "Cervantes", "Clásico de la literatura");