import "./works.scss";
import HomeGrown from "../../images/HomeGrown.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={HomeGrown} alt="" />
            </div>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronLeft} className="arrow left" />
      <FontAwesomeIcon icon={faChevronRight} className="arrow right" />
    </div>
  );
}

export default Works;
