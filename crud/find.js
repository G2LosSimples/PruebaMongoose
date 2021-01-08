require ("../conexion");
const libro = require ("../models/libro");

const buscarLibro = async () => {
     const respuesta = await libro.find ({ });
    console.log (respuesta);
};

buscarLibro();
