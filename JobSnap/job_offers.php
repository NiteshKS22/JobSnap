<?php
  $jobOffers = array(
    array(
      "title" => "Software Developer",
      "company" => "Acme Corp",
      "skills" => array("JavaScript", "React", "Node.js", "SQL")
    ),
    array(
      "title" => "Web Designer",
      "company" => "XYZ Corp",
      "skills" => array("HTML", "CSS", "Photoshop", "Illustrator")
    ),
    array(
      "title" => "Data Analyst",
      "company" => "ABC Corp",
      "skills" => array("Python", "Excel", "SQL", "Statistics")
    )
  );

  function suggestJobs($skills) {
    global $jobOffers;
    $suggestedJobs = array();
    foreach($jobOffers as $job) {
      $jobSkills = $job['skills'];
      $matchCount = 0;
      foreach($jobSkills as $jobSkill) {
        if(in_array(strtolower(trim($jobSkill)), array_map('strtolower', $skills))) {
          $matchCount++;
        }
      }
      if($matchCount >= 2) {
        array_push($suggestedJobs, $job);
      }
    }
    return $suggestedJobs;
  }
?>
