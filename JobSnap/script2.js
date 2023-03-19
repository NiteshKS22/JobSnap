const jobOffers = [
    {
      title: "Software Developer",
      company: "Acme Corp",
      skills: ["JavaScript", "React", "Node.js", "SQL"]
    },
    {
      title: "Web Designer",
      company: "XYZ Corp",
      skills: ["HTML", "CSS", "Photoshop", "Illustrator"]
    },
    {
      title: "Data Analyst",
      company: "ABC Corp",
      skills: ["Python", "Excel", "SQL", "Statistics"]
    },
    {
        title: "Graphic Designer",
        company: "ABC Design Agency",
        skills: ["Photoshop", "Illustrator", "InDesign", "Typography"]
    },
    {
        title: "Marketing Manager",
        company: "Global Enterprises",
        skills: ["Digital Marketing", "SEO", "Social Media Marketing", "Marketing Analytics"]
    },
    {
        title: "Full Stack Developer",
        company: "Innovative Solutions",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
        title: "UX Designer",
        company: "Creative Agency",
        skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Adobe XD"]
    },
    {
        title: "Product Manager",
        company: "Tech Startup",
        skills: ["Product Strategy", "Market Research", "Product Roadmapping", "Agile Methodologies"]
    },
    {
        title: "Data Scientist",
        company: "Big Data Co.",
        skills: ["Machine Learning", "Python", "R", "Data Visualization", "Statistics"]
    }
      
      
  ];
  
  function suggestJobs(skills) {
    let suggestedJobs = [];
    for (let i = 0; i < jobOffers.length; i++) {
      let jobSkills = jobOffers[i].skills;
      let matchCount = 0;
      for (let j = 0; j < jobSkills.length; j++) {
        if (skills.includes(jobSkills[j].toLowerCase())) {
          matchCount++;
        }
      }
      if (matchCount === jobSkills.length) {
        suggestedJobs.push(jobOffers[i]);
      }
    }
    return suggestedJobs;
  }
  
  document.getElementById("skill-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const skills = document.getElementById("skills-input").value.split(", ");
    const suggestedJobs = suggestJobs(skills);
    let output = "";
    if (suggestedJobs.length > 0) {
      output += "<ul>";
      for (let i = 0; i < suggestedJobs.length; i++) {
        output += "<li>" + suggestedJobs[i].title + " at " + suggestedJobs[i].company + "</li>";
      }
      output += "</ul>";
    } else {
      output = "No job offers found for your skills";
    }
    document.getElementById("job-offers").innerHTML = output;
  });