
document.addEventListener('DOMContentLoaded',function(){

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    const btn = document.querySelector('.navbar-toggler')

    function addShadow(){
        if (window.scrollY>=50) {
            nav.classList.add('nav-bg')
        }
        else if(window.scrollY==0){
            nav.classList.remove('nav-bg')
        }

    }
    function addShadowClick (){
        nav.classList.add('nav-bg')
    }

    allNavItems.forEach(item => item.addEventListener('click',()=> navList.classList.remove('show')))
    btn.addEventListener('click', addShadowClick)

    window.addEventListener('scroll', addShadow)

})
// Define an array of job listings
var jobListings = [
  {
    title: "Front-end Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "We are looking for a talented front-end developer with strong skills in HTML, CSS, and JavaScript."
  },
  {
    title: "Back-end Developer",
    skills: ["PHP", "MySQL", "Node.js"],
    description: "We are seeking a skilled back-end developer with expertise in PHP, MySQL, and Node.js."
  },
  {
    title: "UX Designer",
    skills: ["Wireframing", "Prototyping", "User Research"],
    description: "We are seeking a creative UX designer with strong skills in wireframing, prototyping, and user research."
  }
];

// Get a reference to the job listings container
var jobListingsContainer = document.querySelector(".job-listings");

// Loop through the job listings and create HTML elements for each one
jobListings.forEach(function(listing) {
  // Create a job listing element
  var jobListing = document.createElement("div");
  jobListing.classList.add("job-listing");
  
  // Add the job title
  var jobTitle = document.createElement("h3");
  jobTitle.textContent = listing.title;
  jobListing.appendChild(jobTitle);
  
  // Add the job skills
  var jobSkills = document.createElement("ul");
  jobSkills.classList.add("job-skills");
  listing.skills.forEach(function(skill) {
    var skillItem = document.createElement("li");
    skillItem.textContent = skill;
    jobSkills.appendChild(skillItem);
  });
  jobListing.appendChild(jobSkills);
  
  // Add the job description
  var jobDescription = document.createElement("p");
  jobDescription.textContent = listing.description;
  jobListing.appendChild(jobDescription);
  
  // Add the job listing to the container
  jobListingsContainer.appendChild(jobListing);
});
