import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native'
import { TextInput } from "react-native-web";

function Login({navigation}){
    return(
        <View style={{ flex:1, alignItems: 'center', justifyContent:"center"}}>
            <Text><h1>Cadastro</h1></Text>
            <TextInput style={styles.input} placeholder="Nome do produto"/>
            <br></br>
            <TextInput style={styles.input} placeholder="Descrição do produto"/>
            <br></br>
            <TextInput style={styles.input} placeholder="Preço do produto"/>
            <br></br>
            <Button title="Cadastrar"
            onPress={() => navigation.navigate('HomePage')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'25%',
        height:45,
        borderWidth: 1,
        padding: '2em'
    }
});

export default Login;