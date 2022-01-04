import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

const ViewCart = () => {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items
        .map((item) => Number(item.price))
        .reduce((prev, curr) => prev + curr, 0);
    return (
        <>
            {total ?
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 15,
                    paddingHorizontal: 40,
                    borderRadius: 30,

                    position: 'absolute',
                    bottom: 40,
                    zIndex: 999,
                    alignSelf: 'center',


                }}>
                    <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>View Cart</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>{total + "$"}</Text>
                </TouchableOpacity>

                : null
            }
        </>
    )
}

export default ViewCart
