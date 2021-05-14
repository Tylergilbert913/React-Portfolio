import React, { Component } from 'react';
import "../App.css";
import Container from "../components/Container/Container.js";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import FeedMe from "../images/feedme.png";
import Generator from "../images/generator.png";
import HomeGrown from "../images/HomeGrown.png";
import RepoMan from "../images/repoman.png";




class Portfolio extends Component {
    render() {
    return (
        <Container>
    
    <Row>
      <div className="about header">
      <h1>Projects</h1>
      
      <h5>Click the images below for my latest work:</h5>
      </div>
    </Row>
    
    
    <Row>
      <Col size="col-md-6">
        <div class="about header">
        <h3>Repository Refactor</h3>
        <img src={RepoMan} class="img-fluid header" alt="The Repo Man"></img>
        <a className="projectlink" href="https://tylergilbert913.github.io/The-Repo-Man/">
          RepoMan
        </a>
        </div>
      </Col>
      
      <Col size="col-md-6">
        <div className="about header">
        <h3>Feed Me Project</h3>
        <img src={FeedMe} class="img-fluid header" alt="Feed Me"></img>
        <a className="projectlink" href="https://a-andres1.github.io/feed-me-tm/">
          FeedMe
        </a>
        </div>
      </Col>
    </Row>
    
    
    <Row>
      
      <Col size="col-md-6">
        <div class="about header">
        <h3>Password Generator</h3>
        <img src={Generator} className="img-fluid header" alt="Password Generator"></img>
        <a className="projectlink" href="https://tylergilbert913.github.io/A-Generation-of-Passwords/">
          Password Generator
        </a>
        </div>
      </Col>
      
      <Col size="col-md-6 header">
        <div className="about">
        <h3>HomeGrown</h3>
        <img src={HomeGrown} class="img-fluid header" alt="HomeGrown"></img>
        <a className="projectlink" href="https://homegrown-app-grizzlies.herokuapp.com/">
            HomeGrown
        </a>
        </div>
      </Col>
      </Row>
  </Container>
    );
    }
}

export default Portfolio;

