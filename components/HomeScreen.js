import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

import HomeTab from './TabNavigator/HomeTab';
import ProfileTab from './TabNavigator/ProfileTab';
import SearchTab from './TabNavigator/SearchTab';
import AddMediaTab from './TabNavigator/AddMediaTab';
import LikesTab from './TabNavigator/LikesTab';

class HomeScreen extends Component{
    render() {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator>
                <Tab.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false, tabBarIcon: () => ( <Icon name="home" />  ), tabBarShowLabel:false }} />
                <Tab.Screen name="AddMediaTab" component={AddMediaTab} options={{ headerShown: false, tabBarIcon: () => ( <Icon name="add-circle-sharp" />  ), tabBarShowLabel:false }} />
                <Tab.Screen name="SearchTab" component={SearchTab} options={{ headerShown: false, tabBarIcon: () => ( <Icon name="search" />  ), tabBarShowLabel:false }} />
                <Tab.Screen name="LikesTab" component={LikesTab} options={{ headerShown: false, tabBarIcon: () => ( <Icon name="heart" />  ), tabBarShowLabel:false }} />
                <Tab.Screen name="ProfileTab" component={ProfileTab} options={{ headerShown: false, tabBarIcon: () => ( <Icon name="person" />  ), tabBarShowLabel:false }} />
            </Tab.Navigator>
        );
    }
}

export default HomeScreen;