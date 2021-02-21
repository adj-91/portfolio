import './App.css';
import './components/LavaLamp/LavaLamp.css';
import './components/NavBar/NavBar.css';
import './components/Home/Home.css';
import './components/Work/Work.css';
import './components/About/About.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/contact';
import LavaLamp from './components/LavaLamp/LavaLamp';

const App = () => {

  return (
  
<Router>
<div className="main">



        <div className="navBar">
    <NavBar />
    </div>

{/* <div id="content"></div> Not even being used atm! */}

<div id="content">
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

{/* <Switch>
<Route exact path="/contact">
  <Contact />
</Route>
</Switch> */}

<Switch>
<Route exact path="/work">
  <Work />
</Route>
</Switch>
</div>


</div> 

<LavaLamp />
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