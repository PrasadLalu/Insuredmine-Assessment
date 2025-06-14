const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('Category', categorySchema);
