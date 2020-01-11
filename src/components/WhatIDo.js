import React from 'react'

export default class WhatIDo extends React.Component{
    render() {
        return(
            <div>
                <section className="colorlib-about" data-section="whatIDo">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-code" />
                                </span>
                                    <div className="desc">
                                        <h3>Programming Languages</h3>
                                        <p>Java, Python, C#, Go, R, JSON, AJAX, HTML, CSS, and Javascript</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                <span className="icon">
                                    <i className="icon-box" />
                                </span>
                                    <div className="desc">
                                        <h3>Frameworks</h3>
                                        <p>Spring Boot, Selenium, Maven, YouTube API, EMGU CV, ReactJS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                    <div className="desc">
                                        <h3>Dev Ops & Databases</h3>
                                        <p>Docker, Kubernetes, TravisCI, MySQL, OracleDB, Postgresql</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                            <div className="services color-4">
                                <span className="icon">
                                    <i className="icon-arrow-loop" />
                                </span>
                                <div className="desc">
                                    <h3>Data Structures & Algorithms</h3>
                                    <p>As I come from the CS background, I enjoy problem-solving and have a good grasp over the fundamental concepts of Data Structures & Algorithms</p>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-codepen" />
                                </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <p>I have experience building websites and work with mostly backend frameworks such as Core Java, Spring Boot, J2EE
                                            Servlets, and Maven.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                            <div className="services color-6">
                                <span className="icon">
                                    <i className="icon-world-outline" />
                                </span>
                                <div className="desc">
                                    <h3>Associate Instructor</h3>
                                    <p>To spread my knowledge and experience as well as help my younger peers, I will be a Teaching Assistant
                                        for the Intro to Software Systems (CSCI-C 212) in Spring 2020.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}