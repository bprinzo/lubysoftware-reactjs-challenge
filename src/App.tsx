import React from 'react';

import SignIn from './pages/SignIn';
import User from './pages/User';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <User />
    <GlobalStyle />
  </>
);

export default App;
