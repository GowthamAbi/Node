const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: Number,
  description: String,
  experience: Number,
  skills: [String],
  postdate: {
    type: Date,
    default: Date.now,
  },
  deadline: Date,
  status: {
    type: String,
    enum: ["open", "close"],
    default: "open",
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  recruiter: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Job", JobSchema, "Jobs");

/*{
 " title": "React Developer",
  "company": "ZOHO",
  "location": "Chennai",
  "salary": "8",
 " description": "Developer wanted",
 "experience":0,
  "skills": ["Java","React"]
}*/
