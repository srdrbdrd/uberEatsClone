import React from 'react'
import { View, Text, Image } from 'react-native'


const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    price: '$$',
    reviews: '1500',
    rating: '5',
    categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};


const About = (props) => {
    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join('•');

    const description = `${formattedCategories} ${price ? '•' + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;


    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15
    }}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5
    }}
    >{props.description}</Text>
)

export default About
