import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStyles from '../themes/AppStyles';
import Colors from '../themes/Colors';
import Layouts from '../themes/Layouts';
import AssetImages from '../constants/ImageConstants';
import { Image, Text, View } from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import { MovieDescription, Dashboard, DashboardScreen, SearchMovies, Bookmarks } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0.6,
          height: deviceInfoModule.hasNotch() ? 88 : 60,
        },
        tabBarHideOnKeyboard: true,
        style: { position: 'absolute' },
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Layouts.alignCenter}>
              <Image
                style={AppStyles.bottomTabIcon}
                source={AssetImages.movies}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchMovies"
        component={SearchMovies}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Layouts.alignCenter}>
              <Image
                style={AppStyles.bottomTabIcon}
                source={AssetImages.moviesSaved}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Layouts.alignCenter}>
              <Image
                style={AppStyles.bottomTabIcon}
                source={AssetImages.moviesAdded}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
