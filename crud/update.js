require ("../conexion");
const libro = require ("../models/libro");
const mongoose = require("mongoose"); 

const updateLibro = async (titulo, campoCambio, nuevoValor) => {
    
    // const nuevoLibro = await libro.findOneAndUpdate ({title: titulo}, {cambio: nuevoValor}, {new: true});
    // console.log (nuevoLibro);
    let libroUpdate = new libro();
    libroUpdate.author = campoCambio;
    const nuevoLibro = await libro.findOneAndUpdate ({title: titulo}, {libroUpdate.author : nuevoValor}, {new: true})
    console.log (nuevoLibro);

    
    mongoose.connection.close(console.log("cerrado")); 
};

updateLibro ("Quijote","author", "Cervantes JrJr");  

//Meter en la llamada a la función el campo a cambiar.
//Importar funciones?