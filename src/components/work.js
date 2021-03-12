import React from 'react'
import {Link} from 'react-router-dom'

class Work extends React.Component {
    render = () => {
        return (
            <div className="container" id="work-container">
                <Link to='/'><h2 className="back">Eric</h2></Link>
                <h1 className="header">><span id="work-header">Work</span></h1>
                <div id="project-container">
                    <div className="projects">
                        <h3><a className="work-link" href="https://coin-purse.herokuapp.com/" target="_blank">Coin Purse</a></h3>
                        <em>Technologies: JS/React, Java/Spring, Chart.js</em>
                        <p>A cyptocurrency portfolio app</p>
                        <a className="github-link" href="https://github.com/ericulley/coin_purse" target="_blank">FrontEnd <img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a> / <a className="github-link" href="https://github.com/ericulley/project5" target="_blank">BackEnd <img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
                    </div>
                    <div className="projects">
                        <h3><a className="work-link" href="https://imoutdoorsy.herokuapp.com/" target="_blank">I'm Outdoorsy</a></h3>
                        <em>Technologies: JS, Node.js/Express, Cloudinary</em>
                        <p>A social media app for the outdoorsy</p>
                        <a href="https://github.com/ericulley/ImOutdoorsy" target="_blank"><img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
                    </div>
                    <div className="projects">
                        <h3><a className="work-link" href="https://kim-eric-trips.herokuapp.com/" target="_blank">Trips On Trips</a></h3>
                        <em>Technologies: Node.js/Express/MongoDB/React</em>
                        <p>A single-page-app vacation idea vision board.</p>
                        <a href="https://github.com/ericulley/kim-eric" target="_blank"><img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
                    </div>
                    <div className="projects">
                        <h3><a className="work-link" href="https://ericulley.github.io/AltFuel/" target="_blank">AltFuel</a></h3>
                        <em>Technologies: HTML/CSS/JS, jQuery</em>
                        <p>A fuel finder app for electric charging stations</p>
                        <a href="https://github.com/ericulley/AltFuel" target="_blank"><img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
