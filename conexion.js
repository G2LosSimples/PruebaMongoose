const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/PruebaMongoose", {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.on("open", _=>{
    console.log ("Se ha conectado");
})