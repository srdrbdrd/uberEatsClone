import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

const RestaurantDetail = () => {
    return (
        <View style={{ flex: 1 }}>
            <About />
            <View style={{ height: 1, backgroundColor: 'grey' }} />
            <MenuItems />
        </View>
    )
}

export default RestaurantDetail
