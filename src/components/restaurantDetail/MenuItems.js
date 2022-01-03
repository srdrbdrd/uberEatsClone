import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';


const foods = [
    {
        title: 'Handeden sofraya',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya2',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya3',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya4',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },
    {
        title: 'Handeden sofraya5',
        description: 'Ev yemekleri',
        price: '4',
        image: 'https://www.aquamallavm.com/resimler/hizmet/11557838921.47816.jpg'

    },

];



const MenuItems = ({ restaurantName }) => {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue }
        });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodinCart = (food, cartItems) => (
        Boolean(cartItems.find(item => item.title === food.title))
    )

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
                            fillColor='green'
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            isChecked={isFoodinCart(food, cartItems)}
                        />
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
