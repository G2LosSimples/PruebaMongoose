require ("../conexion");
const libro = require ("../models/libro");
const mongoose = require("mongoose"); 

const updateLibro = async (titulo, campoCambio, nuevoValor) => {
    console.log(campoCambio);
    const nuevoLibro = await libro.findOneAndUpdate ({title: titulo}, {campoCambio: nuevoValor}, {new: true});
    console.log (nuevoLibro);
    mongoose.connection.close(console.log("cerrado")); 
};

updateLibro ("El Quijote","author", "Cervantes JrJr");  

//Meter en la llamada a la función el campo a cambiar.
//Importar funciones?