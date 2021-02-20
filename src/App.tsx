import React from "react";
import { Link } from 'react-router-dom'
import { About, Home, Topics } from "./views";
import { Route, Router, Switch } from "./drouter";


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Switch>
                    <Route name="about" component={About}/>
                    <Route name="topics" component={Topics}/>
                    <Route name="home" component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App
