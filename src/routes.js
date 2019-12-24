import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Objectives from './pages/Objectives';


const Routes = createAppContainer(
  createStackNavigator(
    {
      HOME: Home,
      LOGIN: Login,
      REGISTER: Register,
      OBJECTIVES: Objectives,
    },
    {
      headerMode: 'none',
      transparentCard: true,
    },
  ),
);

export default Routes;