import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import styled from 'styled-components'
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Links from './components/Links';
import Contact from './components/contact';

const App = () => {
  return (
  
<Router>
<div className="main">

<div id="heading"><h1>Adam Jones</h1>
<h3>Junior Developer</h3>
</div>

<div id="flex">

<div className="container">
<div id="links">  
    <div><NavBar /></div>
    <div><Links /></div>
</div>

{/* <div id="content"></div> Not even being used atm! */}
</div>

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

<div className="footer"><p>footer</p></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> 
from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
