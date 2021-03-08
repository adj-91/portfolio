import React, {useState} from "react";
import styled from 'styled-components';

const About = () => {
  
  const textArray = [
  "I am currently coming to the end of Code Nation's master coding\
   bootcamp and seeking a junior dev or apprentice role to further develop my skills.",

  "Working with Javascript extensively, including nodejs, react, express\
   as well as MongoDB and MySQL I have covered alot over the past 12 weeks.",

  "I have always had an interest in coding, previously having taken\
   on a FnD degree in computer science, which I was unable to complete due to issues\
    I had at the time. I am excited to be taking this leap to try an kickstart a\
     career in this field again!"
  ]

     const [text, setText] = useState(textArray[0]);
     const [textNum, setTextNum] = useState(0);


  const textUp = () => {
    let num = textNum;

    if (num === 0) {
      return;
    }
    else {
      setText(textArray[num-1]);
      setTextNum(num-1);
    }

  }

  const textDown = () => {
    let num = textNum;

    if (num === 2) {
      return;
    }
    else {
      setText(textArray[num+1]);
      setTextNum(num+1);
    }
  }

return (
  
  // Mobile display
  <div >
    <h1 id="title">About me!</h1>
    <div id="text">

  <div className="mobile">
  <p>{text}</p>

    <div id="arrows">
<ArrowUp onClick={textUp} list={textNum}>▲</ArrowUp>
<ArrowDown onClick={textDown} list={textNum}>▼</ArrowDown>
</div>
</div>

{/* None mobile display */}
<div className="noneMobile">
<p>
{textArray[0]}
</p>

<p>
{textArray[1]}
</p>

<p>
{textArray[2]}
</p>
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

export default About;