import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Random from './random';

const HideShowToggle = () => {
  const [status, setStatus] = useState(true);


  return (
    <View>
      <Text style={{ fontSize: 30, marginVertical: 20, textAlign: 'center' }}>
        HideShowToggle
      </Text>

      {status ? <Random /> : null}

      <Button title="hide" onPress={() => setStatus(false)} />
      <Button title="show" onPress={() => setStatus(true)} />
      <Button title="toggle" onPress={() => setStatus(!status)} />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => setStatus(true)}
      >
        <Text style={styles.buttonText}>Show</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => setStatus(false)}
      >
        <Text style={styles.buttonText}>Hide</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        onPress={() => setStatus(!status)}
        underlayColor={'red'}
      >
        <Text style={styles.buttonText}>Toggle Button</Text>
      </TouchableHighlight>

      


    </View>
  );
};

export default HideShowToggle;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    margin: 20,
    height: 60,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: '13',
    fontWeight: 'bold',
  },
});
