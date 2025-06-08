const messageService = require('../services/message.service');

class MessageController {
    static async insert(req, res) {
        try {
            const { message, day, time } = req.body;
            const response = await messageService.insertMessage({ message, day, time });
            return res.status(response.code).send(response);
        } catch (error) {
            return res.status(500).send({ error });
        }
    } 

    static async list(req, res) {
        try {
            const response = await messageService.listMessages();
            return res.status(response.code).send(response);
        } catch (error) {
            return res.status(500).send({ error });
        }
    } 
}

module.exports = MessageController;

