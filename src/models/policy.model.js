const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const policySchema = new Schema({
    policy_number: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    policy_mode: {
        type: String,
        default: null,
    },
    policy_type: {
        type: String,
        default: null,
    },
    premium_amount: {
        type: Number,
        default: null,
    },
    premium_amount_written: {
        type: String,
        default: null,
    },
    producer: {
        type: String,
        default: null,
    },
    csr: {
        type: String,
        default: null,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    agent: {
        type: Schema.Types.ObjectId,
        ref: 'Agent'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Carrier'
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    applicant_id: {
        type: String,
        default: null,
    },
    agency_id: {
        type: String,
        default: null,
    },
    has_active_client_policy: {
        type: String,
        default: ''
    }
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('Policy', policySchema);
