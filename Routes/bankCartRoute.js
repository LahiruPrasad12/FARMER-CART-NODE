const express = require('express');
const bankCartController = require('../Controllers/banckCardController');
const authController = require("../Controllers/authController");
const router = express.Router();

router.route('/')
  .get(authController.protect,  bankCartController.save)
  .delete(authController.protect,bankCartController.removeCart);

module.exports = router;