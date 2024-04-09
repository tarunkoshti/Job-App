const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({

    students: [{
        type: mongoose.Schema.Types.Object,
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
    workingtype:String,
    startdate: String,
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
    assessments: String,
    location: String,
    company: String,
    applicants: String,
    description: String,
    qualifications: String,
    workconditions: String,
    companyDetail: String,
    contact:String
    

},
    { timestamps: true }
);

const Internship = mongoose.model("internship", internshipModel);
module.exports = Internship;