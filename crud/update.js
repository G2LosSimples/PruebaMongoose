require ("../conexion");
const libro = require ("../models/libro");

const updateLibro = async () => {
    const nuevoLibro = await libro.findOneAndUpdate ({title: "Quijote"}, {title: "El Quijote"}, {new: true});
    console.log (nuevoLibro);
};

updateLibro ();