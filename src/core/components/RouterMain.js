import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/home/home';
import Challenges from '../../components/challenges/Challenges';
import Profile from '../../components/profile/Profile';

const RouterMain = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  )
};

export default RouterMain;