import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Stringer from './modules/mystringer';

export default function App() {
  const [curString, setCurString] = useState('')
  const [flipedString, setFlipedString] = useState('No Value Yet')
  const [crazyString, setCrazyString] = useState('No Value Yet')
  const { stringVal, setStringVal, flipString, crazyCamel } = Stringer()

  const funFlipString = () => {
    setFlipedString(flipString())
  }

  const funCrazyCamel = () => {
    setCrazyString(crazyCamel())
  }

  const stringInputHandler = (enteredText) => {
    setCurString(enteredText)
    setStringVal(enteredText)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Enter A Value'
        onChangeText={stringInputHandler}
        value={curString} 
        style={styles.inputStyle} 
      />


      <View style={styles.buttonHolder}>
        <Button title='Flip' onPress={funFlipString} />
      </View>
      <Text >{flipedString}</Text>

      <View style={styles.buttonHolder}>
        <Button title='Crazy Camel' onPress={funCrazyCamel} />
      </View>
      <Text >{crazyString}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: '80%',
    borderColor: 'black',
    paddingHorizontal: 4,
    borderWidth: 1
  },

  buttonHolder: {
    width: '80%',
    marginTop: 10,
    backgroundColor: 'purple'
  },

  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});
