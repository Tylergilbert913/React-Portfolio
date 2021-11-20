import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">Home</a>
        </div>
        <div className="left">
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="left">
          <a href="#works">Work</a>
        </div>
        <div className="right">
          <a href="#testimonials">Testimonials</a>
        </div>
        <div className="right">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
