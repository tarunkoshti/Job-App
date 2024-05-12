const mongoose = require("mongoose")

exports.connectDatabase = async () => {
     try {
        await mongoose.connect(DB);
        console.log("database connected successfully");
     } catch (error) {
        console.log(error.message)
     }
}