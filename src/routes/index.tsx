import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Repositories from '../pages/Repositories';
import Follower from '../pages/Follower';
import Route from './Route';
import Following from '../pages/Following';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/user" component={User} isPrivate />
    <Route path="/repos" component={Repositories} isPrivate />
    <Route path="/followers" component={Follower} isPrivate />
    <Route path="/following" component={Following} isPrivate />
  </Switch>
);

export default Routes;
