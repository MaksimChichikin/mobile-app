import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";
import Constants from "expo-constants";

export function PageLogIn({navigation}){
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const onSubmitFormHandler = async () => {
        try {
            const responseGet = await axios.get(`https://test-api.easy4.ru/auth?login=${login}&password=${password}`, {});
            if (responseGet.status === 200) {
                navigation.reset(
                    {
                    index: 0,
                    routes: [{name: 'Окно пользователя'}]
                });
            }else {
                throw new Error("Данные невозможно получить");
            }
        } catch (error) {
            alert(error);
        }
    }
    
    return(
        <ScrollView>
        <View>
          <View style={styleLogIn.txbStyle}>
            <TextInput placeholder="Введите логин..." style={styleLogIn} value={login} onChangeText={onLoginHandler} />
            <TextInput placeholder="Введите пароль..." style={styleLogIn} value={password} onChangeText={onPasswordHandler} />
          </View>
  
          <View style={styleLogIn.btnStyle}>
            <Button title="Войти" onPress={onSubmitFormHandler} />
          </View>
          <View style={styleLogIn.btnStyle}>
            <Button title="Зарегистрироваться" onPress={()=>navigation.navigate('Регистрация')} />
          </View>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        txbStyle: {
            marginTop: 200,
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnStyle:{
            marginTop: 5,
            alignItems: 'center',
            
        }
    }
);
