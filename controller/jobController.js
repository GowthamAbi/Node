const Job = require("../module/Job");
const jobController = {
  getJobs: async (request, response) => {
    response.json({ message: "GETi" });
  },
  createJobs: async (request, response) => {
    const {
      title,
      company,
      location,
      salary,
      description,
      experience,
      skills,
    } = request.body;
    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description,
      experience,
      skills,
    });
    await newJob.save();
    response.json({ message: "Job Saved in MongoDB" });
  },
  search: (request, response) => {
    response.json({ message: "Searching" });
  },
  getJobById: (request, response) => {
    response.json({ message: "getJobById" });
  },
};

module.exports = jobController;
