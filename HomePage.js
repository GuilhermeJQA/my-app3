import React from "react";
import {View,Text,Button} from 'react-native'

function HomePage({navigation}){
    return(
        <View style={{ flex:1, alignItems: 'center', justifyContent:"center"}}>
            <Button title="Cadastrar novo produto"
            onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}

export default HomePage;