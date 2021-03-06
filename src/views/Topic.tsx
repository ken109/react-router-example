import React from 'react';
import { Component } from "./index";
import { Link, Route, Switch, useParams } from "@ken109/react-router";

const Topic: React.FC = () => {
    let params = useParams()

    return (
        <div>
            <h2>{params.topicId}</h2>

            <ul>
                <li>
                    <Link to={{name: 'component', params: {componentId: 'app'}}}>App</Link>
                </li>
                <li>
                    <Link to={{name: 'component', params: {componentId: 'second'}}}>Second</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            {/*<View/>*/}
            <Switch>
                <Route name="component" component={Component}/>
                <Route name="topic">
                    <h3>Please select a component.</h3>
                </Route>
            </Switch>
        </div>
    );
}

export default Topic;
