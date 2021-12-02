import "./works.scss";
import HomeGrown from "../../images/HomeGrown.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

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
      <img src={ArrowBackIos} className="arrow-left" alt="" />
      <img src={ArrowForwardIos} className="arrow right" alt="" />
    </div>
  );
}

export default Works;
