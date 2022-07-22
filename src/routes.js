import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import routes from './const/routes';
import CountriesScreen from './screen/CountriesScreen/CountriesScreen';
import CountriesDetailScreen from './screen/CountriesDetailScreen/CountriesDetailScreen';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export function getAuthRoute() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={routes.CountriesScreen} component={CountriesScreen} />
      <AuthStack.Screen name={routes.CountriesDetailScreen} component={CountriesDetailScreen} />
    </AuthStack.Navigator>
  );
}

const Routes = () => {

  return <NavigationContainer>{ getAuthRoute()}</NavigationContainer>;
};

export default Routes;
