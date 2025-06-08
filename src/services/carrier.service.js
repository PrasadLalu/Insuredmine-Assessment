const Carrier = require('../models/carrier.model');

const findOneAndUpdate = async(company_name) => {
    return await Carrier.findOneAndUpdate(
        { name: company_name },
        { name: company_name },
        { upsert: true, new: true }
    );
}

module.exports = {
    findOneAndUpdate,
}
