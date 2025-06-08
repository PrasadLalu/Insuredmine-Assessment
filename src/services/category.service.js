const Category = require('../models/category.model');

const findOneAndUpdate = async (category_name) => {
    return await Category.findOneAndUpdate(
        { name: category_name },
        { name: category_name },
        { upsert: true, new: true }
    );
}

module.exports = {
    findOneAndUpdate,
}
