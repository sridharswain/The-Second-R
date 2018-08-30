import React from 'react';
import {Router,Scene, Stack} from 'react-native-router-flux';
import Splash from "./src/screens/splash";
import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';

export default App = () => {
  return(
  <Router>
    <Stack key = "root">
      <Scene key="home" component = {Home} hideNavBar initial/>
      <Scene key="login" component = {Login} hideNavBar/>
      <Scene key="register" component = {Register} hideNavBar/>
      <Scene key="splash" component = {Splash} hideNavBar/>
    </Stack>
  </Router>
  );
}
