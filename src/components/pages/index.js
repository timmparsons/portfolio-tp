import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Me user={user} />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/projects" }>
          <Projects user={user} />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/work"}>
          <Work user={user} />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/education"}>
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;