import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src="/assets/nazmus.jpg" alt="Nazmus Sabit" width="160" style={{ borderRadius: "8px" }} />
      <p><strong>Name:</strong> Nazmus Sabit</p>
      <p><strong>Address:</strong> 79 Porchester Drive, Scarborough, ON M1J 2R4</p>
      <p><strong>Email:</strong> nazmussabit101@gmail.com</p>
      <p><strong>Phone:</strong> +1 (437) 933-4579</p>
      <p>
        Detail-oriented and results-focused professional with experience in hospitality, food service,
        and warehouse operations. Skilled in team leadership, workflow management, customer service,
        and reporting.
      </p>
      <a href="/assets/Resume.jpg" target="_blank" rel="noreferrer">
        📄 Download My Resume
      </a>
    </div>
  );
}

export default About;
