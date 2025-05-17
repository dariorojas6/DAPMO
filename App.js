import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador ] = useState(0);
 const [estilo, setEstilo] = useState([]); 
  return (
   
        <ImageBackground
      source={{ uri: 'https://resizer.glanacion.com/resizer/v2/argentina-programa-40-apunta-a-capacitar-gratis-a-VNBE2HBY2FEDFNDMGW3EJ725UU.jpg?auth=702d69c5647bfc34113e87c41615d701e3821e26dbc41d5fe875fd8e13ab67da&width=1280&height=854&quality=70&smart=true' }} style={styles.background} resizeMode="cover" >
      <View style={styles.container}>
      <Text style={styles.text}>CONTADOR</Text>
          <TouchableOpacity  
onPress={() => setEstilo(!estilo)}  
style={{ backgroundColor: estilo ? 'green' : 'red' }}> 
<Text>Cambiar color</Text> 
</TouchableOpacity> 
      <Text>{contador}</Text>

      <StatusBar style="auto" />
    </View>
    </ImageBackground>

    
  );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#fff",
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
   text: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: "red",
    color: "$fff"
  }
});
