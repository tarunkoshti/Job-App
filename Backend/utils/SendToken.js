exports.sendtoken = (user, statuscode, res) => {
    const token = user.getjwttoken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: false,
        secure: true,
        sameSite: 'None',  
        path: '/', 
    }

    res.status(statuscode).json({ success: true, id: user._id, token })
    // res.status(statuscode).cookie("token", token, options)
    // .json({success: true, id: user._id, token})
}