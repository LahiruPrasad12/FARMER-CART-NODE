const BCart = require('../Models/BankCartModel');
const catchAsync = require('../Utils/catchAsync');

exports.save = catchAsync(async (req, res, next) => {
  try{
    const new_cart = await BCart.create(req.body)
    res.status(200).json({
      status: 'success',
      data: {
        user: new_cart
      }
    });
  }catch (e){

  }
});

exports.removeCart = catchAsync(async (req, res, next) => {
  try{
    await BCart.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        message: "cart remove successfully"
      }
    });
  }catch (e){

  }
});