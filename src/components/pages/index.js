import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/education">Education</Link></li>
        </ul>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
      </div>
    </HashRouter>
  );
};

export default Pages;