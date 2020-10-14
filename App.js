// import React from 'react'
// import Login from './src/Screens/Login/index'
// import {View, Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Feather';


// class App extends React.Component{
//   render(){
//     return (
//       <View>
//         <Text>Hallo World</Text>
//         <Icon name='archive' size={30}/>
//         <Icon name='phone-off' size={30}/>
//         <Icon onPress={() => alert('pressed')} name='map-pin' color={'green'} style={{backgroundColor: '#eee', fontSize: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}/>
//       </View>
//     )
    
//   }
// }
// export default App;

import React from 'react'
import {View, Text} from 'react-native'
import Home from './src/Screens/Home/index'
import Navigation from './src/Navigation/index'
class App extends React.Component{
  render(){
    return <Navigation/>
  }
}
  export default App;