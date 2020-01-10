import React from 'react'

export default class Timeline extends React.Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Associate Instructor at IU <span> Jan 2020- Present</span></h2>
                                                <p>As a longing dream for my masters, I get to conduct labs and teach Java to about 20 undergrad students and spread the knowledge
                                                I gained from my experience. I will be assisting the instructor with grading for the <b>CSCI C212-Introduction to Software Systems</b> course.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Graduate CS Student at Indiana University Bloomington <span> 2019- Present</span></h2>
                                                <p>After a long stint as a professional developer, I decided to head back to study and get my Masters at IU. Right now, I am studying Computer Science
                                                and enjoying the learning experience I get from professors and my peers. In my first semester, I took up courses such as <b>cloud computing, software engineering and applied algorithms</b>.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Java Developer at SBI-BITS<span> April 2017- July 2019</span></h2>
                                                <p>I joined a financial services firm, SBI-BITS and further extended my knowledge in Java. I got the chance to lead a small
                                                team of 2 people where we shipped an overhauled system of the existing force settlement batch system for internal operations of the company. Moreover,
                                                    I implemented fault-tolerant behavior for the backend of order processing servers. </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Web Engineer at Hikari Tsushin <span> Oct 2014- Feb 2017</span></h2>
                                                <p>After finishing my undergrad, I got to work in Hikari Tsushin and experience an international environment and work culture. I worked on a variety
                                                of projects ranging from Servelets, EJB and a telemarketing system to streamline the existing process of how business employees interacted
                                                with their customers.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-6">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Undergrad from IIIT-Delhi  <span> August 2010- May 2014</span></h2>
                                                <p>I studied Computer Science and Engineering from IIIT-Delhi and pursued my Bachelors in Technology degree. I took courses such as DSA, Computer Networks and Advanced Programming. I developed
                                                interest in Java and its related frameworks and in the end, was ready to dive into the professional field to apply whatever I'd learned.</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
