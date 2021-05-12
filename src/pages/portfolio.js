import React, { Component } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import FeedMe from "../images/feedme.png";
import Generator from "../images/generator.png";
import HomeGrown from "../images/HomeGrown.png";
import RepoMan from "../images/repoman.png";




class Portfolio extends Component {
    renders() {
    return (
        <Container>
    
    <Row>
      <h1>Projects</h1>
      
      <h5>Click the images below for my latest work:</h5>
      
    </Row>
    
    
    <Row>
      <Col size="col-md-6">
        
        <h3>Repository Refactor</h3>
        <img src={RepoMan} class="img-fluid" alt="The Repo Man"></img>
        <a className="project-link" href="https://tylergilbert913.github.io/The-Repo-Man/">
        </a>
      </Col>
      
      <Col size="col-md-6">
        <h3>Feed Me Project</h3>
        <img src={FeedMe} class="img-fluid" alt="Feed Me"></img>
        <a className="project-link" href="https://a-andres1.github.io/feed-me-tm/">
        </a>
      </Col>
    </Row>
    
    
    <Row>
      
      <Col size="col-md-6">
        <h3>Password Generator</h3>
        <img src={Generator} className="img-fluid" alt="Password Generator"></img>
        <a className="project-link" href="https://tylergilbert913.github.io/A-Generation-of-Passwords/">
          Password Generator
        </a>
      </Col>
      
      <Col size="col-md-6">
        <h3>HomeGrown</h3>
        <img src={HomeGrown} class="img-fluid" alt="HomeGrown"></img>
        <a className="project-link" href="https://homegrown-app-grizzlies.herokuapp.com/">
            HomeGrown
        </a>
      </Col>
      </Row>
  </Container>
    );
    }
}

export default Portfolio;

