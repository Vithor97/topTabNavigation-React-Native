import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab1 from '../../Pages/Tabs/Tab1'
import Tab2 from '../../Pages/Tabs/Tab2'

import { Ionicons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator(); 

const tabRoutes = () => {
    return (
    <Tab.Navigator 
    tabBarPosition='bottom' 
    tabBarOptions={{
        showIcon: true,
        showLabel: false,
        // activeTintColor: 'red',
        // inactiveTintColor: 'black',
        pressColor: '#C2FF00'
    }}
    screenOptions={({route})=>({
        tabBarIcon: ({focused, color})=>{
            let iconName;
            if(route.name === 'Tab1'){
                
                iconName = focused ? 'home' : 'home-outline'
            }
            if(route.name === 'Tab2'){
                iconName = focused ? 'settings' :  'settings-outline'
            }

            return <Ionicons name={iconName} size={24} color={color} />
        }
    })}>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    )
}

export default tabRoutes