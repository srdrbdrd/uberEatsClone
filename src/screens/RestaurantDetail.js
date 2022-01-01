import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/restaurantDetail/About'

const RestaurantDetail = () => {
    return (
        <View>
            <About />
            <View style={{ height: 1, backgroundColor: 'grey' }} />
        </View>
    )
}

export default RestaurantDetail
