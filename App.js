import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('Hello world xd'); 
  const [mensajeInicial, setMensajeInicial] = useState(true);
  const toggleText = () => {
    mensajeInicial ? setOutputText("Hello world xd") : setOutputText("hasta sipre churry");
    setMensajeInicial(!mensajeInicial);
  }
  
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>{outputText}</Text>
      <Button title="Cambiar saludo" onPress={() => toggleText()} />
      <StatusBar style="auto" />

      <Text >soy thibaut de linux</Text>
      <Text>soy juan ochando window</Text>
      <Text>soy rober</Text>
      <Text>soy juan ochando desde el fork</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
