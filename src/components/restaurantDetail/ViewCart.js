import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ViewCart = () => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', flexDirection: 'row', position: 'absolute',
            bottom: 40,
            zIndex: 999
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 13,
                    borderRadius: 30,
                    width: 300,

                }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart
