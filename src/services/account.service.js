const Account = require('../models/account.model');

const findOneAndUpdate = async (account_name, account_type) => {
    return await Account.findOneAndUpdate(
        { name: account_name },
        {
            name: account_name,
            type: account_type,
        },
        { upsert: true, new: true }
    );
}

module.exports = {
    findOneAndUpdate,
}