import React from 'react';
import { Topic } from "./index";
import { Link, Route, Switch } from "@ken109/react-router";

const Topics: React.FC = () => {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={{name: 'topic', params: {topicId: 'component'}}}>Components</Link>
                </li>
                <li>
                    <Link to={{name: 'topic', params: {topicId: 'props-v-state'}}}>
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
                <Route name="topics">
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

export default Topics;
