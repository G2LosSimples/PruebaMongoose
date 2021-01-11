require ("../conexion");
const libro = require ("../models/libro");
const mongoose = require("mongoose"); 

const borrarLibro = async (id) => {
    const libroBorrado = await libro.findByIdAndDelete(id);
    mongoose.connection.close(console.log("cerrado")); 
    console.log (`Se ha borrado ${libroBorrado}`);
};

borrarLibro ("5ff8464c5d958806f243a158");