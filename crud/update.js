require ("../conexion");
const libro = require ("../models/libro");

const libroUpdate = async() =>{

    const libroBuscar = await libro.findOneAndUpdate({title:"Quijote"}, {author : "Cervantes JR JR", description : "Nueva descripción"}, {new : true}) ;
    console.log(libroBuscar);
};

// const query = { name: 'borne' };
// Model.update(query, { name: 'jason bourne' }, options, callback);

// // is sent as
// Model.update(query, { $set: { name: 'jason bourne' }}, options, function(err, res));
// // if overwrite option is false. If overwrite is true, sent without the $set wrapper.

libroUpdate();



// updateLibro ("Quijote","author", "Cervantes JrJr");  

//Meter en la llamada a la función el campo a cambiar.
//Importar funciones?