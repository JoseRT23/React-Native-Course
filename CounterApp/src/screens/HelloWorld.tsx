import React from 'react'
import { Text, View } from 'react-native'

const HelloWorld = () => {
  return (
    <View style={{ 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 50,
          fontWeight: 'bold'
        }}>Helloooo</Text>
      </View>
  )
}

export default HelloWorld