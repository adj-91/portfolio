import React, {useState} from "react";

const About = () => {
  
  const textArray = [
  {text: "I am currently coming to the end of Code Nation's master coding\
   bootcamp and seeking a junior dev or apprentice role to further develop my skills."},

  {text: "Working with Javascript extensively, including nodejs, react, express\
   as well as MongoDB and MySQLI have covered alot over the past 12 weeks."},

  {text: "I have always had an interest in coding, previously having taken\
   on a FnD degree in computer science, which I was unable to complete due to issues\
    I had at the time. I am excited to be taking this leap to try an kickstart a\
     career in this field again!"}
  ]

     const [text, setText] = useState(textArray[0].text);
     const [textNum, setTextNum] = useState(0);


  const textUp = () => {
    let num = textNum;

    if (num === 0) {
      return;
    }
    else {
      setText(textArray[num-1].text);
      setTextNum(num-1);
    }

  }

  const textDown = () => {
    let num = textNum;

    if (num === 2) {
      return;
    }
    else {
      setText(textArray[num+1].text);
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
<p onClick={textUp}>▲</p>
<p onClick={textDown}>▼</p>
</div>
</div>

{/* None mobile display */}
<div className="noneMobile">
 <p>
    I am currently coming to the end of Code Nation's master coding
   bootcamp and seeking a junior dev or apprentice role to further develop my skills.
    </p>

<p>
Working with Javascript extensively, including nodejs, react, express as well as MongoDB and MySQL
I have covered alot over the past 12 weeks.
    </p>

<p>
I have always had an interest in coding, previously having taken on a FnD degree in computer science,
which I was unable to complete due to issues I had at the time. I am excited to be taking this leap
to try an kickstart a career in this field again!
</p>
</div>

    </div>
  </div>

)};

export default About;