import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";
import Constants from "expo-constants";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PageSetting } from "./page-setting";

const Tab = createBottomTabNavigator()
const UserScreen = () => (
    <View style={styleLogIn.viewStyle}>
      <Text>Это окно пользователя</Text>
    </View>
  );
export function PageUser(){
    return(
        <Tab.Navigator>
        <Tab.Screen options={{headerShown: true}} name="пользователь" component={UserScreen} />
        <Tab.Screen options={{headerShown: true}} name="Настройки" component={PageSetting} />
      </Tab.Navigator>
  
    );
}

const styleLogIn=StyleSheet.create(
    {
        viewStyle:{
            flex: 1, 
            justifyContent: 'center',
             alignItems: 'center' 
        },
    }
);
