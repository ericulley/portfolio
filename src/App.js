// Dependencies
import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

// Components
import Nav from "./components/nav.js"
import About from "./components/about.js"
import Work from "./components/work.js"
import Contact from "./components/contact.js"

class App extends React.Component {
    render = () => {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={Nav} />
                        <Route path='/about' component={About} />
                        <Route path='/work' component={Work} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
