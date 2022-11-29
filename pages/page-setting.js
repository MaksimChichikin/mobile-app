import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";
import Constants from "expo-constants";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export function PageSetting(){

    return(
        
        <View style={styleLogIn.viewStyle}>
            <Text>Это окно настроек</Text>
        </View>
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