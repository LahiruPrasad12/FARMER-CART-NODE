const BCart = require('../Models/BankCartModel');
const catchAsync = require('../Utils/catchAsync');

exports.save = catchAsync(async (req, res, next) => {
  const new_cart = await BCart.create(req.body)

});