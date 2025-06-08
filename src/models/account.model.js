const { Schema, model } = require('mongoose');

const accountSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        default: null,
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('Account', accountSchema);