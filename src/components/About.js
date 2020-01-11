import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I ?</h2>
                                            <p>MS in Computer Science student at IU Bloomington. What is the one word that would define me ? <b>Passionate and curious</b> about everything I do!
                                            I am fond of photography and reading books in my free time. I love to travel, watch and discuss about football and cricket.</p>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
