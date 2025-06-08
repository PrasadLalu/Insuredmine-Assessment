const router = require('express').Router();
const MessageController = require('../controllers/MessageController');

router.post('/add', MessageController.insert);
router.get('/list', MessageController.list);

module.exports = router;
