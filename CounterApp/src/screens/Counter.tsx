import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Contador: {counter}</Text>

      <Fab
        title='-1'
        position='bl'
        onPress={() => setCounter(counter - 1)}
      />

      <Fab
        title='+1'
        position='br'
        onPress={() => setCounter(counter +1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default Counter