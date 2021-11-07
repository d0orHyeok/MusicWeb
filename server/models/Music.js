const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const musicSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        default: 'Untitled',
    },
    author: {
        type: String,
        default: 'Unnamed',
    },
    url: {
        type: String,
    },
    playlist: {
        type: String,
    },
});

const Music = mongoose.model('Music', musicSchema);

module.exports = { Music };
