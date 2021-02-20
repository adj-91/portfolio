import {NavLink} from "react-router-dom";
import AboutSvg from './svg/Aboutsvg';
import HomeSvg from './svg/Homesvg';
import ContactSvg from "./svg/Contactsvg";
import LinkedinSvg from "./svg/LinkedinSvg";
import GithubSvg from "./svg/Githubsvg";

// import styled from 'styled-components'

const NavBar = () => {
    return (
      <div className="navbar">
        <nav>
            <p>
              <NavLink to="/" ><HomeSvg/> <svg height="20" width="60">
              <text x="7" y="20" fill="#009688">Home</text>
              </svg> </NavLink>
            </p>
            <p>
              <NavLink to="about" ><AboutSvg/> <svg height="20" width="60">
              <text x="7" y="20" fill="#009688">About</text>
              </svg></NavLink>
            </p>
            {/* <p>
              <NavLink to="work"  id="navlink">Work</NavLink>
            </p> */}
            <p>
              <NavLink to="contact" ><ContactSvg/> <svg height="20" width="60">
              <text x="2" y="20" fill="#009688">Contact</text>
              </svg></NavLink>
            </p>
            <p>
              <LinkedinSvg /> <svg height="20" width="60" >
              <a href="https://www.linkedin.com/in/admmj/" target="blank">
              <text x="0" y="20" fill="#222222" >Linkedin</text>
              </a>
              </svg>
            </p>
            <p>
              <GithubSvg /> <svg height="20" width="60">
              <a href="https://github.com/adj-91/" target="blank">
              <text x="7" y="20" fill="#222222" >Github</text>
              </a>
              </svg>
            </p>
        </nav>
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