import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'

class Splash extends React.Component{
    render(){
        setTimeout (() => {
            this.props.navigation.replace('Home');
        }, 4000);

    return(
        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style = {{fontWeight:'bold',fontSize:40}}>
             Mari Berdzikir !!!
            </Text>
            <ActivityIndicator size='large' color='black'/>
        </View>
    );
    }
}

export default Splash;