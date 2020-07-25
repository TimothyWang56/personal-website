import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import SkillPage from './Pages/SkillPage/SkillPage';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/home" exact>
                    <HomePage/>
                </Route>
                <Route path="/experiences" exact>
                    <ExperiencePage/>
                </Route>
                <Route path="/projects" exact>
                    <ProjectPage/>
                </Route>
                <Route path="/skills" exact>
                    <SkillPage/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
