require ("../conexion");
const libro = require ("../models/libro");
const mongoose = require("mongoose"); 

const crearLibros = async(titulo, autor, descripcion) => {
    let libro1 = new libro ({
        title: titulo,
        author: autor,
        description: descripcion
    });
    await libro1.save();
    mongoose.connection.close(console.log("cerrado")); 
};

crearLibros("Quijote", "Cervantes", "Clásico de la literatura");
crearLibros("Quijote", "Cervantes", "Clásico de la literatura");
crearLibros("Fray Perico", "Cervantes", "Clásico de la literatura");
