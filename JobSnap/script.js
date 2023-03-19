function recommendJobs() {
    const skillsInput = document.getElementById("skills");
    const skills = skillsInput.value.split(", ");
    const recommendedJobs = getRecommendedJobs(skills);
    const output = document.getElementById("output");
    output.innerHTML = `Recommended Jobs: ${recommendedJobs.join(", ")}`;
  }
  
  function getRecommendedJobs(skills) {
    const jobs = [
      {
        title: "Software Engineer",
        requiredSkills: ["Java", "Python", "JavaScript", "SQL"]
      },
      {
        title: "Data Analyst",
        requiredSkills: ["SQL", "R", "Python", "Excel"]
      },
      {
        title: "Web Developer",
        requiredSkills: ["HTML", "CSS", "JavaScript", "React"]
      },
      {
        title: "UX Designer",
        requiredSkills: ["User Research", "Wireframing", "Prototyping", "UI Design"]
      }
    ];
  
    const recommendedJobs = [];
  
    for (let job of jobs) {
      let hasAllSkills = true;
      for (let skill of job.requiredSkills) {
        if (!skills.includes(skill)) {
          hasAllSkills = false;
          break;
        }
      }
      if (hasAllSkills) {
        recommendedJobs.push(job.title);
      }
    }
  
    return recommendedJobs;
  }
  