const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    image: {
        type: string,
        required: true
    }
})

const Character = mongoose.model("Character", CharacterSchema, "characters")

module.exports = Character;