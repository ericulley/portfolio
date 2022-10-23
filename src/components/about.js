import React from 'react'
import {Link} from 'react-router-dom'
import Skills from './skills.js'

class About extends React.Component {
    render = () => {
        return (
            <div className="container" id="about-container">
                <Link to='/'><h2 className="back">Eric</h2></Link>
                <aside id="skills"><Skills /></aside>
                <h1 className="header">&gt;<span id="about-header">About</span></h1>
                <p className="about-p">Hi, I’m a professional software engineer motivated by helping others and creating simple yet effective solutions to complex challenges. With an education in Philosophy, I know how to listen critically and break down big picture problems into manageable tasks.</p>
                <br/>
                <p className="about-p"> I've continually tinkered with coding and web development since taking my first Java programming class in high school, although I found myself working in the outdoor education industry after college in various instructing and management roles. So not only do I bring technical engineering skills to the table, but I’ve also got over five years experience working in teams and leadership positions.</p>
                <br/>
                <p className="last about-p">As a software engineer, I’ve built numerous full stack applications that are centered around a simple, intuitive user experience and clearly organized code. I’ve used many of the major frontend frameworks, like React and Vue, and built APIs in a number of different languages including Node, Ruby, and Java. Currently, I help companies implement authentication solutions tailored to complex business requirements and troubleshoot issues encountered in the process.</p>
            </div>
        )
    }
}

export default About
