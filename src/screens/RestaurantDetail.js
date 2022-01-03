import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />

            <View style={{ height: 1, backgroundColor: 'grey' }} />
            <MenuItems restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )

}

export default RestaurantDetail
