const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

module.exports = model('Message', messageSchema);
