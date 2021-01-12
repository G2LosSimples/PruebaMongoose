require ("../conexion");
const libro = require ("../models/libro");
const mongoose = require("mongoose"); 


const buscarLibro = async (title) => {
     const respuesta = await libro.find ({title});
    console.log (respuesta);
    mongoose.connection.close(console.log("cerrado")); 
};



buscarLibro("El Quijote");
