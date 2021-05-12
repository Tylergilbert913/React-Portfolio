/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";


class Contact extends Component {
    render() {
    return (
        <Container>
        <Row>
            <h1>Contact</h1>
        </Row>
        
        <Row>
            <Col size="col-md-5">
                <h3>Name</h3>
                <section className="form-floating mb-3">
                    <input type="name" className="form-control" id="floatingInput" placeholder="Name"></input>
                    <label for="floatingInput">Name</label>
                </section>
            </Col>
        </Row>
        
        <Row>
            <Col size="col-md-5">
                <h3>Email</h3>
                <section className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">Email address</label>
                </section>
            </Col>
        </Row>
        
        <Row>
            <Col size="col-md-5">
                <h3>Message</h3>
                <section className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Message" id="floatingTextarea2"
                        style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Message</label>
                </section>
            </Col>
        </Row>
        
        <Row>
            <Col size="col-md-2">
                <button type="button" className="btn btn-primary btn-lg">Submit</button>
            </Col>
        </Row>
    </Container>
    );
    }
}

export default Contact;