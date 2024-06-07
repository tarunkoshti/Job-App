const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/ErrorHandler")
const { catchAsyncErrors } = require("./catchAsyncErrors")
const Student = require("../models/studentModel");
const Employe = require("../models/employeModel");


exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return next(new ErrorHandler("Please login to access the resource", 401))

    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.id = id;

    const user = await Student.findOne({ _id: id }) || await Employe.findOne({ _id: id })

    req.token = token
    req.user = user

    next();
    // res.json({id, token});
})