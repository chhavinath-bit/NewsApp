import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
export default function Footer() {

  return (
    <div className="container-fluid">
    <div className="footer row">
      <div className="quote-Area d-none d-md-block col-md-6">
        <span style={{ fontStyle: "italic", fontSize:"21px" }}>
          "I still believe that if your aim is to change the world, journalism
          is a more immediate short-term weapon."
        </span>{" "}
        - <span style={{fontSize:"21px"}}>Tom Stoppard</span>
      </div>
      <div className="footer-Navigation d-none d-md-block col-md-3">
        <ul style={{ listStyle: "none" , fontSize:"16px"}}>
          <li><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/Business">Business</Link></li>
          <li><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
          <li> <Link className="nav-link" to="/Health">Health</Link></li>
          <li> <Link className="nav-link" to="/Science">Science</Link></li>
          <li><Link className="nav-link" to="/Sports">Sports</Link></li>
          <li> <Link className="nav-link" to="/Technology">Technology</Link></li>

        </ul>
      </div>
      <div className="contact-us d-none d-md-block col-md-3 text-center">
        <h4 >Contact Us
        </h4>
        <span className="mx-3"><a href="https://github.com/chhavinath-bit" rel="noreferrer" target="_blank"><GitHubIcon /></a></span>
        <span className="mx-3"><a href="https://www.linkedin.com/in/chhavi-nath-86a551210/" rel="noreferrer" target="_blank"><LinkedInIcon /></a></span>
      
      </div>
      <div className="d-md-none quote-Area-sm col-12">
        <span style={{ fontStyle: "italic", fontSize:"21px" }}>
          "I still believe that if your aim is to change the world, journalism
          is a more immediate short-term weapon."
        </span>{" "}
        - <span style={{fontSize:"21px"}}>Tom Stoppard</span>
      </div>
      <div className="d-md-none footer-Navigation-sm col-12">
        <ul style={{ listStyle: "none" , fontSize:"16px"}}>
          <li><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/Business">Business</Link></li>
          <li><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
          <li> <Link className="nav-link" to="/Health">Health</Link></li>
          <li> <Link className="nav-link" to="/Science">Science</Link></li>
          <li><Link className="nav-link" to="/Sports">Sports</Link></li>
          <li> <Link className="nav-link" to="/Technology">Technology</Link></li>

        </ul>
      </div>
      <div className="d-md-none contact-us col-12" style={{marginLeft:"10px"}}>
        <h4>Contact Us </h4>
        <span className="mx-3"><a href="https://github.com/chhavinath-bit" rel="noreferrer" target="_blank"><GitHubIcon /></a></span>
        <span className="mx-3"><a href="https://www.linkedin.com/in/chhavi-nath-86a551210/" rel="noreferrer" target="_blank"><LinkedInIcon /></a></span>
      </div>
    </div>
    </div>
  );
}
