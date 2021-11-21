import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
    console.log(menuOpen);
  return (
    //   concatenating  menuOpen which is the variable for the state + "active", being that it wont be active at first
    <div className={"topbar " + (menuOpen && "active")}>
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
            {/* once the hamburger is clicked, then it will be active/true, but it will start out as false */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
