import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Nav extends React.Component {
    state = {
        input: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    componentDidMount = () => {
        try {
            axios.get('https://coin-purse.herokuapp.com/')
            axios.get('https://mysterious-atoll-88793.herokuapp.com/')
            axios.get('https://imoutdoorsy.herokuapp.com/')
            axios.get('https://kim-eric-trips.herokuapp.com/')
        } catch (err) {
            console.log(err)
        }
    }
    render = () => {
        return (
            <div className="container" id="nav">

                <Link to='/about'>
                    <h1 className="nav-item" id="about">><span id="hi"></span></h1>
                </Link>

                <Link to="/work">
                    <h1 className="nav-item" id="work">><span id="im"></span></h1>
                </Link>

                <Link to="/contact">
                    <h1 className="nav-item" id="contact">><span id="eric"></span></h1>
                </Link>

                <h1 className="nav-item" id="input-carrot">>
                    <input id="input" type="text" onChange={this.handleChange}/>
                    <span id="display" contenteditable>{this.state.input}</span>
                    <span id="cursor"/>
                </h1>

                <div id="spacer"></div>

            </div>
        )
    }

}

export default Nav
