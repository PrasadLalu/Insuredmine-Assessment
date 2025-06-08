const policyService = require('../services/policy.service');

class PolicyController {
    static async policyByUsername(req, res) {
        try {
            const { username } = req.params;
            const response = await policyService.policyByUsername(username);
            return res.status(response.code).send(response);
        } catch (error) {
            return res.status(500).send({ error });
        }
    }

    static async policyByEachUser(req, res) {
        try {
            const { username } = req.params;
            const response = await policyService.policyByEachUser(username);
            return res.status(response.code).send(response);
        } catch (error) {
            return res.status(500).send({ error });
        }
    }
}

module.exports = PolicyController;
