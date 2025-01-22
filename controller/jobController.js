const Job = require("../module/Job");
const jobController = {
  getJobs: async (request, response) => {
    const Jobs = await Job.find();
    response.json(Jobs);
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
  getJobById: async (request, response) => {
    const { id } = request.params;
    const job = await Job.findById(id);
    response.json(job);
  },
};

module.exports = jobController;
