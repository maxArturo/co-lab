const router = require('express').Router();
const messageController = require('../../controllers/api/messages');

router.get('/', messageController.getMessages);
router.post('/', messageController.postMessage);

module.exports = router;
