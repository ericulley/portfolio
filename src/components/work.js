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
                        <h3><a className="work-link" href="https://coin-purse.vercel.app/" target="_blank">Coin Purse</a></h3>
                        <em>Technologies: React, Java/Spring, Chart.js</em>
                        <p>A cryptocurrency portfolio app</p>
                        <a className="github-link" href="https://github.com/ericulley/coin_purse" target="_blank">FrontEnd <img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a> / <a className="github-link" href="https://github.com/ericulley/project5" target="_blank">BackEnd <img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
                    </div>
                    <div className="projects">
                        <h3><a className="work-link" href="https://personal-backlog.vercel.app/" target="_blank">Personal Backlog</a></h3>
                        <em>Technologies: Typescript, Node.js/Express, Vite</em>
                        <p>A drap-n-drop SPA for your personal backlog of issues.</p>
                        <a href="https://github.com/ericulley/personal-backlog" target="_blank"><img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
                    </div>
                    <div className="projects">
                        <h3><a className="work-link" href="http://imoutdoorsy-env.eba-s3p8x6p8.us-west-2.elasticbeanstalk.com/" target="_blank">I'm Outdoorsy</a></h3>
                        <em>Technologies: Node.js/Express, Cloudinary API</em>
                        <p>A social media app for the outdoorsy</p>
                        <a href="https://github.com/ericulley/ImOutdoorsy" target="_blank"><img className="github-img" src={process.env.PUBLIC_URL + '/GitHub.png'} alt="github-logo"/></a>
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
