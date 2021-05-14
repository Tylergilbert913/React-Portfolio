import React, { Component } from 'react';
import "../App.css";
import profile from "../images/profile.jpg";
import wilderness from "../images/wilderskills.jpg";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Home extends Component {
    render() {
    return (
        
        <Container>
            <div className="header">
                        <h3 className="moon">
                            About Me
         </h3>
         </div>
            <div className="card-body">
          <Row>
         <Col size="col-md-3">
       <img className="profile-pic card-fluid" src={profile} alt="profile pic" width="100%" height="95%" />
      </Col>
  
    <Col className="moon" size="col-md-6">
        

     <p>To truly understand me, one must realize that the outdoors is the one thing in this world that seems to keep
        me aligned. Wether it be hanging out in a hammock, skydiving, river rafting, kayaking, snowboarding,
        downhill mountain biking, backpacking, etc. All I know is that if it makes me slightly nervous and gets me
        outdoors, then I'm all in.</p>
    
    <p>I grew up in Columbus, Ga, which is only a few hours drive west of my current location in Savannah, Ga. I've
        recently moved back to the south, but only to hike The Appalachian Trail! I was living in Denver, CO, when the
        idea to hike The Appalachain Trail, once again, passed through my mind. I decided to head back to the south and create
        a better plan. This plan was no more when I returned from a snowboaridng trip in March and the pandemic was in
        full swing. I can only describe it as a crippling realization, but I quickly understood that not being able to
        hike The Appalachian Trail would be the least of my worries.</p>
        
    <p>I'm in the process of acquiring my Full-Stack Web Developer certificate at Georgia Tech. As a Full-Stack Web
        Developer, I enjoy creating responsive, user-friendly websites. I truly love creating and web development has
        given me the opportunity to do just that.</p>
 </Col>
  </Row>
   

 </div>
<Row>
    <img
      src={wilderness}
      className="card-img-top pic" alt="Somewhere in the Redwoods" width="80%%" height="75%"></img>
    <div className="card-body">
      <h1 className="card-title moon">Contact Information</h1>
      <h5 className="card-text moon">Below are several ways of contacting me or keeping up with what I'm currently working on:
      </h5>
    
      <div className="card-text moon"><small className="text-muted">
          <Col size= "col-md-2">
          <a href="https://www.instagram.com/gilbert_graped/"><i class="yup fab fa-instagram-square"></i></a>
          </Col>
          <Col size= "col-md-2">
          <a href="https://www.linkedin.com/in/tyler-gilbert-6b269a171/"><i class="yup fab fa-linkedin-in"></i></a>
          </Col>
          <Col size= "col-md-2">
          <a href="https://github.com/Tylergilbert913"><i class="yup fab fa-github-square"></i></a>
          </Col>
          <Col size= "col-md-2">
          <a href="mailto:Tyler.gilbert913@gmail.com"><i class="yup fas fa-envelope-square"></i></a>
          </Col>
          <Col size= "col-md-2">
          <a href="https://www.facebook.com/tyler.gilbert.3762"><i class="yup fab fa-facebook-square"></i></a>
          </Col>
          <Col size= "col-md-2">
          <a href="./Tyler Gilbert .pdf" class="yup" download>My Resume</a>
          </Col>
        </small>
        <p>Call Me: 1(706)577-5779</p>
    </div>
  </div>
  </Row>

           

        </Container>
    );
    }
}

export default Home;