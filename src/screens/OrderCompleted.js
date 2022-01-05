import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems';

const OrderCompleted = () => {

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price))
        .reduce((prev, curr) => prev + curr, 0);





    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

            <View
                style={{
                    margin: 15,
                    alignItems: "center",

                    flex: 1
                }}
            >
                <LottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your order at {restaurantName} has been placed for {total}
                </Text>
                <ScrollView >
                    <MenuItems
                        foods={items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default OrderCompleted
