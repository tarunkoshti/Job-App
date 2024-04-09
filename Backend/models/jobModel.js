const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({

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
    jobtype: {
        type: String,
        enum: ["In office", "Remote", "Hybrid"]
    },
    workingtype:String,
    openings: Number,
    description: String,
    preferences: String,
    salary: Number,
    perks: String,
    assements: String,
    company: String,
    location: String,
    experience: String,
    start: String,
    responsibilities: String,
    qualifications: String,
    workconditions: String,
    applicants: Number,
    companyDetail: String,
    contact: String

},
    { timestamps: true }
);

const Job = mongoose.model("job", jobModel);
module.exports = Job;