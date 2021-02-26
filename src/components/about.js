import React from 'react'
import {Link} from 'react-router-dom'

class About extends React.Component {
    render = () => {
        return (
            <div className="container" id="about-container">
                <Link to='/'><h2 className="back">Eric</h2></Link>
                <h1 className="header">>About</h1>
                <p>Hi, I’m a professional software engineer motivated by helping others and creating simple yet effective solutions to big picture problems.</p>
                <br/>
                <p>My academic background is in philosophy and political science which led me into a career of alternative education where I left my mark on the next generation teaching leadership, teamwork, and other transferable skills. I also spent that time in management roles and growing a small subsidiary of a top tier ski resort into a major contender in it’s local market. So not only do I bring technical engineering skills to the table, but I’ve also got over five years experience working in teams and in roles of leadership.</p>
                <br/>
                <p>As a software engineer, I've decided to turn a long time passion and hobby into a career path. I’ve built numerous full stack applications that are centered around a simple, intuitive user experience and clearly organized code. I’m fluent in all the major frontend technologies and have experience building with frameworks like React and Vue and data visualization libraries like Chart.js. On the backend, I’ve built projects using Node/Express.js, Ruby on Rails, and Java/Spring.</p>
            </div>
        )
    }
}

export default About
