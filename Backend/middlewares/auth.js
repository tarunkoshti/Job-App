const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/ErrorHandler")
const { catchAsyncErrors } = require("./catchAsyncErrors")
import Student from "../models/studentModel"

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return next(new ErrorHandler("Please login to access the resource", 401))

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Student.findOne({_id:id})
    req.token = token
    req.user = user

    req.id = id;

    next();
    // res.json({id, token});
})