import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Modules from './Modules';
import Games from './Games';

const IndexPage = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/modules" component={Modules} />
                <Route path="/games" component={Games} />
            </Switch>
        </Router>
    );
};

export default IndexPage;