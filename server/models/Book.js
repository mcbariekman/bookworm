const { Schema } = require('mongoose');

const bookSchema = new Schema({
    bookId: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    setName: {
        type: String
    },

    seriesName: {
        type: String
    },

    setImage: {
        type: String
    },

    rarity: {
        type: String
    },

    releaseDate: {
        type: String
    }
});

module.exports = bookSchema;
