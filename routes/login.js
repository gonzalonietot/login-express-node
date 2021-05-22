const express = require('express');
const router = express.Router();
const { checkLogin } = require('../controllers/login');

/* Login */
router.post('/', checkLogin);

module.exports = router;
