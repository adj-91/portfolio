import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import styled from 'styled-components'
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/contact';

const App = () => {
  let userAgentString = navigator.userAgent; 
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1; 
 
  const fireFoxHandler = () => { //need to prevent overline in firefox
  if (firefoxAgent) {
    return (
      <div id="headingFirefox"><h1>Adam Jones</h1>
      <h3>Junior Developer</h3>
      </div>
    ) }
    else {
      return (
        <div id="heading"><h1>Adam Jones</h1>
        <h3>Junior Developer</h3>
        </div>
      )
    }
  }

  return (
  
<Router>
<div className="main">

<div id="heading"><h1>Adam Jones</h1>
        <h3>Junior Developer</h3>
        </div>

<div id="flex">

<div className="container">
<div id="links">  
    <NavBar />
</div>

{/* <div id="content"></div> Not even being used atm! */}
</div >

<Switch>
<Route exact path="/">
  <Home />
  </Route>
  </Switch>

  <Switch>
<Route exact path="/about">
  <About />
</Route>
</Switch>

<Switch>
<Route exact path="/contact">
  <Contact />
</Route>
</Switch>

{/* <Switch>
<Route exact path="/work">
  <p>work</p>
</Route>
</Switch> */}

</div>

</div> 
</Router>
//consider adding credits link as likely to add other code/images in!
  );
}

// const Container = styled.div`

// background-color: lightseagreen;
// display: flex;
// flex-wrap: space-evenly ;
// justify-content: center;
// align-items: center;
// `;

export default App;
