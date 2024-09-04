import { useState } from "react";
import "./intro.css";
import Design from "../designs/design";

function Intro(){
    const [activeIndex,setActiveIndex] = useState(0);

    const handleClick = (index)=>{
        setActiveIndex(index);
    }
    const labels = ["About me","Experiences","Recommended"];
    return(
        <>
          <div className="intro">
            <div className="intro-tabs">
                <div className="active"
                style={{
                    left: `${(100 / 3) * activeIndex}%`,
                    width: `calc(33.3333% - 10px)`,
                    height: `calc(100% - 10px)`
                  }}></div>
               {labels.map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={index === activeIndex ? 'active-tab' : ''}
                        >
                            {label}
                        </button>
                ))}
            </div>
            <div className="intro-content">
              <p className="para-1">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
              </p>
              <p className="para-2">
              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
              </p>
            </div>
            <div className="intro-designs">
              <Design/>
            </div>
            <div className="design-line"></div>
          </div>
          <div className="line"></div>
        </>
    )
}

export default Intro;