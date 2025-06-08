const { Schema, model } = require('mongoose');

const agentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('Agent', agentSchema);
