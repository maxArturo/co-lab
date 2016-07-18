const apiVersion = 'v1';
const router = require('express').Router();
const messageRouter = require('./messages');

router.use(`/api/${apiVersion}/messages`, messageRouter);

module.exports = router;
