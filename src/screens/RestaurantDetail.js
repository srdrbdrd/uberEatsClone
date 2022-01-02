import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

const RestaurantDetail = ({ route }) => {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />


            <MenuItems />
        </View>
    )

}

export default RestaurantDetail
