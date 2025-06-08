const User = require('../models/user.model');

const findOneAndUpdate = async (row, accountId) => {
    return await User.findOneAndUpdate(
        { email: row.email },
        {
            first_name: row.firstname,
            dob: new Date(row.dob),
            address: row.address,
            phone: row.phone,
            state: row.state,
            zip: row.zip,
            email: row.email,
            gender: row.gender,
            user_type: row.userType,
            account: accountId
        },
        { upsert: true, new: true }
    );
}

module.exports = {
    findOneAndUpdate,
}
