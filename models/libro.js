const {Schema, model} = require ("mongoose");
const libroSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: String
});

module.exports = model("book", libroSchema);