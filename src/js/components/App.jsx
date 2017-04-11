import React, { Component } from 'react'
import icon from '../../../public/b-icon.png'
import { Route, Link, Switch } from 'react-router-dom'
import NoMatch from './NoMatch.jsx'

const Foo = () => (
    <div>
        <h3>Helloooooo</h3>
    </div>
)

class App extends Component {

    render() {
        let match = this.props.match.url
        match = (match === '/') ? '' : match

        return (
            <div className="App">
                <h1>Cello world!</h1>
                <img src={icon} alt=""/>
                <Link to={`${match}/foo`}>Foo</Link>
                <Switch>
                    <Route exact path={`${match}/`} component={null} />
                    <Route path={`${match}/foo`} component={Foo} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}

export default App
