import "./works.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import FeedMe from "../../images/FeedMe.png";
import HomeGrown from "../../images/HomeGrown.png";
import ElectricAve from "../../images/ElectricAve.png";
import { useState } from "react";


function Works() {

  // eslint-disable-next-line no-undef
  const [ currentSlide, setCurrentSlide ] = useState(0);

  
  
  const data = [
    {
      id: "1",
      icon: `${faUtensils}`,
      title: "Feed Me",
      desc: "Where will you eat next?",
      img: `${FeedMe}`,
      link: "https://github.com/Tylergilbert913/feed-me-tm",
    },
    {
      id: "2",
      icon: `${faLeaf}`,
      title: "Home Grown",
      desc: "For the modern day plant nurturer",
      img: `${HomeGrown}`,
      link: "https://github.com/caitie-gorham/project-2",
    },
    {
      id: "3",
      icon: `${faPlug}`,
      title: "Electric Ave",
      desc: "A simplfied solution for finding your next EV chargings station",
      img: `${ElectricAve}`,
      link: "https://github.com/skimmers/project_3",
    },
  ];
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
     : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)

  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide*100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <FontAwesomeIcon icon={d.icon} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronLeft} className="arrow left" onClick={()=> handleClick("left")} />
      <FontAwesomeIcon icon={faChevronRight} className="arrow right" onClick={()=> handleClick()}/>
    </div>
  );
}

export default Works;
