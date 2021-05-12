import React, { Component } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



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
        <img src="images/repoman.png" class="img-fluid" alt="The Repo Man"></img>
        <a className="project-link" href="https://tylergilbert913.github.io/The-Repo-Man/">
        </a>
      </Col>
      
      <Col size="col-md-6">
        <h3>Feed Me Project</h3>
        <img src="images/feedme.png" class="img-fluid" alt="Feed Me"></img>
        <a className="project-link" href="https://a-andres1.github.io/feed-me-tm/">
        </a>
      </Col>
    </Row>
    
    
    <Row>
      
      <Col size="col-md-6">
        <h3>Password Generator</h3>
        <img src={} className="img-fluid" alt="Password Generator"></img>
        <a className="project-link" href="https://tylergilbert913.github.io/A-Generation-of-Passwords/">
          Password Generator
        </a>
      </Col>
      
      <Col size="col-md-6">
        <h3>HomeGrown</h3>
        <img src={} class="img-fluid" alt="HomeGrown"></img>
        <a className="project-link" href="https://homegrown-app-grizzlies.herokuapp.com/">
            HomeGrown
        </a>
      </Col>
      </Row>
  </Container>
    );
    }
}

export deafult Portfolio;

<section className="text-center">
                <h1 className="py-3 text-center project-header resume-header">Projects</h1>
                <span><a  className="text-color project-header" href="https://github.com/jonathanstoll0603">A full project list can be found here on GitHub</a></span>
            </section>
            <section className="row text-center my-5">
              <div className="col-md-4 d-block py-4">
                <img src={trailblazerImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/skimmers/project_2" alt="A man sitting on the edge of a mountain">
                        Trail Blazers
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={footyImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/Footy" alt="A soccer ball laying in grass with dew on top">
                        Footy
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={cmsTechBlogImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/CMS-tech-blog" alt="A digital database">
                        CMS Tech Blog
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={eCommerceImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/e-commerce-backend" alt="Small packages stacked on top of a laptop keyboard">
                        E-Commerce Backend
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={dayPlannerImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/day-planner" alt="A day planning agenda">
                        Day Planner
                    </a>
                  </h2>
              </div>
              <div className="col-md-4 d-block py-4">
                <img src={employeeDirectoryImg} className="project-img" />
                  <h2 className="my-2">
                    <a className="text-color project-link" href="https://github.com/jonathanstoll0603/CMS-tech-blog" alt="A chart of an employee directory">
                        React Employee Directory
                    </a>
                  </h2>
              </div>
            </section>