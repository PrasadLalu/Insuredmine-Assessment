const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        default: null,
    },
    address: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    state: {
        type: String,
        default: null,
    },
    zip: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    gender: {
        type: String,
        default: null,
    },
    user_type: {
        type: String,
        default: null,
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('User', userSchema);
