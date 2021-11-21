import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            home
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>Tyler Gilbert</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Tyler.Gilbert913@gmail.com</span>
          </div>
        </div>

        <div className="right">
            <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
