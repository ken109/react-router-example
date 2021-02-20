import React from 'react';
import { Link } from "react-router-dom";
import Component from "./Component";
import { Route, Switch, useParams } from "../router";

const Topic: React.FC = () => {
    let params = useParams()

    return (
        <div>
            <h2>{params.topicId}</h2>

            <ul>
                <li>
                    <Link to={`/topics/components/app`}>App</Link>
                </li>
                <li>
                    <Link to={`/topics/components/second`}>Second</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            {/*<View/>*/}
            <Switch>
                <Route name="component" component={Component}/>
                {/*<Route name="component_top">*/}
                {/*    <h3>Please select a component.</h3>*/}
                {/*</Route>*/}
            </Switch>
        </div>
    );
}

export default Topic;
