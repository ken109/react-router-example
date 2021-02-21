import React from "react";
import { About, Home, Topics } from "./views";
import { Link, Route, Router, Switch } from "./router";


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link name="home">Home</Link>
                    </li>
                    <li>
                        <Link name="about">About</Link>
                    </li>
                    <li>
                        <Link name="topics">Topics</Link>
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
