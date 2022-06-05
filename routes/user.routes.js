const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.route('/').get(userController.getUsers).post(userController.getCreateUser);
router.route('/create/:token').post(userController.createUser);

module.exports = router;