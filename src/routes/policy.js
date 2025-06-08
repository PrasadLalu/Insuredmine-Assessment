const router = require('express').Router();
const PolicyController = require('../controllers/PolicyController');

router.get('/search/:username', PolicyController.policyByUsername);
router.get('/by-each-user', PolicyController.policyByEachUser);

module.exports = router;
