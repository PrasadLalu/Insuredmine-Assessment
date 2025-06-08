const router = require('express').Router();
const multer = require('multer');
const UploadController = require('../controllers/UploadController');

const upload = multer({ dest: './uploads' });

router.post('/upload', upload.single('file'), UploadController.uploadFile);

module.exports = router;

