import React, {useState} from "react";
import styled from 'styled-components';

import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';
import Project3 from '../projects/Project3';

const Work = () => {

  const [counter, setCounter] = useState(0);

  const up = () => {
    if (counter === 0) {
      return;
    }
    else {
     let num = counter - 1;
      setCounter(num);
    }
  }

  const down = () => {
    if (counter === 2) {
      return;
    }
    else {
    let num = counter + 1;
      setCounter(num);
    }
  }

  return (
  
  <div>
    <h1 id="title">Projects</h1>
    
    {/* content when viewed on browser */}
    <div className="noneMobile">
      <div id="text" className="grid">
    <Project1 />
    <Project2 />
    <Project3 />
    </div>
    </div>
    {/* {content when viewed on mobile} */}
    <div className="mobile">
    <div id="text" className="grid">
    
{counter === 0 && <Project1 /> }
{counter === 1 && <Project2 /> }
{counter === 2 && <Project3 /> }

<div id="arrows">
<ArrowUp onClick={up} list={counter}>▲</ArrowUp>
<ArrowDown onClick={down} list={counter}>▼</ArrowDown>
</div>

</div>
  </div>

  </div>
  
)};

const ArrowUp = styled.p`

color: ${props=> props.list === 0 ? "#585858" : "#f0f8ff" };
`;

const ArrowDown = styled.p`

color: ${props=> props.list === 2 ? "#585858" : "#f0f8ff" };
`;

export default Work;