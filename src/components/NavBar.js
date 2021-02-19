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
              <NavLink to="/" ><HomeSvg/></NavLink>
            </p>
            <p>
              <NavLink to="about" ><AboutSvg/></NavLink>
            </p>
            {/* <p>
              <NavLink to="work"  id="navlink">Work</NavLink>
            </p> */}
            <p>
              <NavLink to="contact" ><ContactSvg/></NavLink>
            </p>
            <p>
              <LinkedinSvg />
            </p>
            <p>
              <GithubSvg />
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