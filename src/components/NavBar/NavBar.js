import {NavLink} from "react-router-dom";
import AboutSvg from '../svg/Aboutsvg';
import HomeSvg from '../svg/Homesvg';
import ContactSvg from "../svg/Contactsvg";
import LinkedinSvg from "../svg/LinkedinSvg";
import GithubSvg from "../svg/Githubsvg";
import WorkSvg from "../svg/Worksvg";

// import styled from 'styled-components'

const NavBar = () => {
    return (
      <div className="navbar">
            {/* <div className="svgDiv">
              <NavLink to="/" ><HomeSvg/> </NavLink>
            <p>Home</p>
            </div> */}
            <div className="svgDiv">
              <NavLink to="about" ><AboutSvg/> </NavLink>
            <p>About</p>
            </div>
            <div className="svgDiv">
              <NavLink to="work"  ><WorkSvg /></NavLink>
            <p>Work</p>
            </div>
            <div className="svgDiv">
              <NavLink to="contact" ><ContactSvg /></NavLink>
              <p>Contact</p>
            </div>

            <div className="svgDiv" >
              <LinkedinSvg /> 
              <p>Linkedin</p>
            </div> 
            

            <div className="svgDiv">
              <GithubSvg /> 
              <p>Github</p>
            </div>
      </div>
    );
  }

//   const Container = styled.div`
// width: 100vw;
// height: 50px;
// background-color: lightseagreen;
// display: flex;
// justify-content: center;
// align-items: center;
// `;

  export default NavBar;