import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';



const foods = [
    {
        title: 'Handeden sofraya',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },

]



const MenuItems = () => {
    return (
        <ScrollView>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 20,
                    }}>
                        <BouncyCheckbox iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                            fillColor='green' />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginHorizontal: 20 }} />
                </View>))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={{ fontSize: 19, fontWeight: '600' }}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
    </View>
)

export default MenuItems
