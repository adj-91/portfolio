import {NavLink} from "react-router-dom";

// import styled from 'styled-components'

const NavBar = () => {
    return (
      <div className="navbar">
        <nav>
            <p>
              <NavLink to="/" className="button" >Home</NavLink>
            </p>
            <p>
              <NavLink to="about" className="button" >About</NavLink>
            </p>
            {/* <p>
              <NavLink to="work"  id="navlink">Work</NavLink>
            </p> */}
            <p>
              <NavLink to="contact" className="button" >Contact</NavLink>
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