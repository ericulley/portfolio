import React from 'react'
import {Link} from 'react-router-dom'

class Work extends React.Component {
    render = () => {
        return (
            <div className="container" id="work-container">
                <Link to='/'><h2 className="back">Eric</h2></Link>
                <h1 className="header">>Work</h1>
                <div id="project-container">
                    <div className="projects">
                        <a href="" target="_blank"><h3>Coin Purse</h3></a>
                        <em>Technologies: JS/React, Java/Spring, Chart.js</em>
                        <p>A cyptocurrency portfolio app</p>
                    </div>
                    <div className="projects">
                        <a href="#"><h3>Cabin Fever</h3></a>
                        <em>Technologies: JS/React, Ruby/Rails, MapBox</em>
                        <p>A cabin rental and reservation app</p>
                    </div>
                    <div className="projects">
                        <a href="" target="_blank"><h3>I'm Outdoorsy</h3></a>
                        <em>Technologies: JS, Node.js/Express, Cloudinary</em>
                        <p>A social media app for the outdoorsy</p>
                    </div>
                    <div className="projects">
                        <a href="" target="_blank"><h3>AltFuel</h3></a>
                        <em>Technologies: HTML/CSS/JS, jQuery</em>
                        <p>A fuel finder app for electric charging stations</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
