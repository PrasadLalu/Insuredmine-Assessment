const router = require('express').Router();
const uploadRoutes = require('./upload');
const policyRoutes = require('./policy');
const messageRoutes = require('./message');

router.use('/file', uploadRoutes);
router.use('/policy', policyRoutes);
router.use('/message', messageRoutes);

// default router to check api health
router.get('/health-check', (req, res) => {
    return res.send({ status: 'Healthy' });
});

module.exports = router;
