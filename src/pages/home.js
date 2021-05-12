import React, { Component } from 'react';
import "./body.css";
import profile from "./images/profile.jng";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Home extends Component {
    render() {
    return (
        
        <Container>
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
         </h3>
            </div>
            <div className="card-body">
            <blockquote className="blockquote mb-0">
          <Row>
         <Col size="col-md-3">
       <img className="profile-pic" src={profile} alt="profile pic" width="100%" height="auto%" />
      </Col>

    <Col size="col-md-8">

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
   </blockquote>
   </div>
 </div>
           

        </Container>
    );
    }
}

export default Home;