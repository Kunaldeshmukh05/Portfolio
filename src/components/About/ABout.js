import React from "react";
import { Button, Container } from "react-bootstrap";
import "./about.css";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/skills');
  };


  return (
    <>
      <br></br>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "4vw" }}>
        ABOUT
      </h1>
      <div className="abt-main">
        <Container className="abt-card"  style={{ backgroundColor: "#F4F4F6" }}>
          Hi, I am Kunal. A Full Stack Web Developer. An Open Source enthusiast
          and a Computer Science graduate from India.
          <br />
          <br />  
          I am a Software engineer with a strong foundation in Computer Science,
          specializing in web development. I have good work experience with
          various startups where I was core part of developer team and work on
          major features. Proficient in a range of technologies, I've
          successfully delivered tailored solutions for various freelance
          projects.
          <br />
          <br />I love working on new and exciting technologies. I have a keen
          interest in Web Development and I am always looking for new
          opportunities to learn and grow.
        </Container>
        <div className="abti"></div>
      </div>

      <div className="d-flex justify-content-center mt-4">
      <Button variant="secondary" size="lg" className="button-primary me-2" onClick={handleRedirect}>
        SKILLS   
      </Button>
      <Button variant="secondary" size="lg" className="button-secondary">
        RESUME
      </Button>
    </div>
      <br></br>
      <hr style={{ border: "1px solid black" }} />

    </>
  );
};

export default About;
