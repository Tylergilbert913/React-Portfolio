import "./intro.scss";
import Image from "../../images/profile.jpg";
import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Front-End Developer",
        "Photographer",
        "Humanitarian",
        "Environmentalist",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Image} alt="profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Howdy There, I'm</h2>
          <h1>Tyler Gilbert</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <br />
          <h4>
            I'm a Front-End Developer with a passion for creating responsive,
            user-friendly websites. I've cultivated a love for web development
            over the last year and look forward to implementing the knowledge
            I've gained throughout this journey, into my career. I'm an
            adaptable, self-starting, enthusiastic problem solver that enjoys
            team-building and collaboration.
            <br />
            <br />
            I've been in the sales and hospitality world for the last decade,
            but I'm eager to push foward with my newfound love for building web
            applications.
          </h4>
        </div>
        <a href="#portfolio">
          <ArrowDownward className="arrowDownward" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
