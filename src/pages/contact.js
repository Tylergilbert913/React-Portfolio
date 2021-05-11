import React from 'react';
import { Row, Col } from "../components";


function container() {
    return (
        <div className="container">
        
        <section className="row">
            <h1>Contact</h1>
            <hr>
        </section>
        
        <section className="row gene">
            <section className="col-md-5">
                <h3>Name</h3>
                <section className="form-floating mb-3">
                    <input type="name" className="form-control" id="floatingInput" placeholder="Name">
                    <label for="floatingInput">Name</label>
                </section>
            </section>
        </section>
        
        <section className="row gene">
            <section className="col-md-5">
                <h3>Email</h3>
                <section className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </section>
            </section>
        </section>
        
        <section className="row gene">
            <section className="col-md-5">
                <h3>Message</h3>
                <section className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Message" id="floatingTextarea2"
                        style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Message</label>
                </section>
            </section>
        </section>
        
        <section className="gene row">
            <article className="col-md-2">
                <button type="button" className="btn btn-primary btn-lg">Submit</button>
            </article>
        </section>
        </section>
    </div>
    )
}