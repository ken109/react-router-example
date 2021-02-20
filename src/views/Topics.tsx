import React from 'react';
import { Link } from "react-router-dom";
import { Topic } from "./index";
import { Route, Switch } from "../router";

const Topics: React.FC = () => {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`/topics/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`/topics/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route name="topic" component={Topic}/>
            </Switch>
        </div>
    );
}

export default Topics;
