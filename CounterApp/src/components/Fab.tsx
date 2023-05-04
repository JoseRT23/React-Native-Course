import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, Platform, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl';
}

export const Fab = ({ title, onPress, position='br' }: Props) => {

  const android = () => {
    return (
        <View style={[styles.fabLocation,
                    (position === 'bl' ? styles.left
                    : styles.rigth)
                ]}>
            <TouchableNativeFeedback onPress={onPress}
                                    background={TouchableNativeFeedback.Ripple('#5050D6', false, 27.3)}>
                <View style={styles.fab}>
                    <Text style={styles.fabText} >{ title }</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
  }

  const ios = () => {
    return (
            <TouchableOpacity onPress={onPress}
                              activeOpacity={ 0.8 }
                              style={[styles.fabLocation,
                                    (position === 'bl' ? styles.left
                                    : styles.rigth)
                              ]}>
                <View style={styles.fab}>
                    <Text style={styles.fabText} >{ title }</Text>
                </View>
            </TouchableOpacity>
    )
  }

  return ((Platform.OS === 'ios') ? ios() : android())
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5050D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        
        elevation: 8,
      },
    
      fabText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
      },
    
      fabLocation: {
        position: 'absolute',
        bottom: 25,
      },

      rigth: {
        right: 25
      },

      left: {
        left: 25
      }
})