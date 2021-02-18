import React from "react";
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'



const Links = () => (
  <div className="links">
     <a href="https://www.linkedin.com/in/admmj/" target="_blank">
    <img src={linkedin} id="linkedin" /> </a> 

    <a href="https://github.com/adj-91/" target="_blank">
    <img src={github} id="github" /> </a>
  </div>
);

export default Links;