import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home';
import About from '../Pages/About';
import tabRoutes from './topTab/tab.routes'


const { Navigator, Screen } = createStackNavigator();

function AppRoute(){


    return (
        <Navigator>
            <Screen name="Home" component={Home}/> 
            <Screen name="About" component={tabRoutes}/>         
        </Navigator>

    )
}

export default AppRoute;