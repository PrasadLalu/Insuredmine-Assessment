const uploadService = require('../services/upload.service');

class UploadController {
    static async uploadFile(req, res) {
        try {
            const { file } = req;
            const response = await uploadService.uploadFile(file);
            return res.status(response.code).send(response);
        } catch (error) {
            return res.status(500).send({ error });
        }
    } 
}

module.exports = UploadController;
