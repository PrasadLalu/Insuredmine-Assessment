const Agent = require('../models/agent.model');

const findOneAndUpdate = async (agent) => {
    return await Agent.findOneAndUpdate(
        { name: agent },
        { name: agent },
        { upsert: true, new: true }
    );
}

module.exports = {
    findOneAndUpdate,
}
