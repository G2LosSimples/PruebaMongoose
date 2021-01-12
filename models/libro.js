const {Schema, model} = require ("mongoose");
const libroSchema = new Schema ({
    title: String,
    
    author: String,
       
    description: String
});

module.exports = model("book", libroSchema);