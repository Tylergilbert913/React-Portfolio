import "./testimonials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import Chris from "../../images/ChrisEnright.jpg";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            {/* <FontAwesomeIcon icon={faChevronRight} className="left" /> */}
            <img
              className="user"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFhiccLM3GFEw/profile-displayphoto-shrink_800_800/0/1628566750458?e=1644451200&v=beta&t=6aN08W1-V0w_QaCa0jWT2crbv5TvpI62GKteVwS1IsQ"
              alt="gfjdfgj"
            />
            {/* <FontAwesomeIcon icon={faVideo} className="right" /> */}
            <div className="center">
              <p>
                "Tyler is a tenacious learner, who asks insightful questions.
                It's been great to see him grow as a web developer and I am
                excited for him to continue down his new career path."
              </p>
            </div>
            <div className="bottom">
              <h3>Chris Enright</h3>
              <h4>Web Developer</h4> 
              <h4>ServiceCentral Technologies, Inc.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
