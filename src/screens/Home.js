import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "A3TSGp1f-FVNOIICAll7g1U7zqin5l8BqtBDa5tzD-LiNlWi4y7MaKDX6vEmJQ-EBZliZHzNuv05EHx7HPW3l3BoSmGtFRmDqjJShnqC0ypkh8Q2HPzJ6Ovm7Y_NYXYx";

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Istanbul`;


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses))


    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [])
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;