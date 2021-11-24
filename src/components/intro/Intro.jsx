import "./intro.scss";
import Image from "../../images/profile.jpg";

function Intro() {
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
          <h3>Front-End Web Developer<span></span></h3>
        </div>
        <a href="#portfolio">
            <img src="" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
