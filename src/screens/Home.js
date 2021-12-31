import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "A3TSGp1f-FVNOIICAll7g1U7zqin5l8BqtBDa5tzD-LiNlWi4y7MaKDX6vEmJQ-EBZliZHzNuv05EHx7HPW3l3BoSmGtFRmDqjJShnqC0ypkh8Q2HPzJ6Ovm7Y_NYXYx";

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery")
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }
        //Yelp api shows restaurant in cities but depends country dont give information about delivery or pickup. 
        //Because of that Im checking api data hava transaction or not at first.
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(json.businesses[0].transactions.includes("pickup" || "delivery") ?
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    ) : json.businesses
                )
            );

    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <View style={{ height: 2, backgroundColor: 'grey' }} />
            <BottomTabs />
        </SafeAreaView>
    )
}

export default Home;