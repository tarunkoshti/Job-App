const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }],
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employe"
    },
    profile: String,
    skills: String,
    internshiptype: {
        type: String,
        enum: ["In office", "Remote"]
    },
    openings: Number,
    from: String,
    to: String,
    duration: String,
    responsibility: String,
    stipend:{
       status:{
            type: String,
            enum: ["Fixed", "Negotiable", "Performance based", "Unpaid"]
       },
       amount: Number,
    },
    perks: String,
    assements: String,
    location: String,
    company: String,
    applicants: String,
    description: String,
    qualifications: String,
    workconditions: String,
    openings: String,
    companyDetail: String

},
    { timestamps: true }
);

const Internship = mongoose.model("internship", internshipModel);
module.exports = Internship;