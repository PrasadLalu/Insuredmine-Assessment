const { Schema, model } = require('mongoose');

const carrierSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('Carrier', carrierSchema);
