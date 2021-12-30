import React from 'react';
import { View, Text, TextInput } from 'react-native';
//Google places not used due to priced api
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const SearchBar = ({ cityHandler }) => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row', backgroundColor: "#eee", borderRadius: 50 }}>

            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                <Ionicons name="location-sharp" size={24} />
            </View>

            <TextInput
                onSubmitEditing={(value) => value.nativeEvent.text.length > 1 ? cityHandler(value.nativeEvent.text) : null}
                placeholder='Search'
                style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: "700",
                    alignItems: "center",
                    marginRight: 10,
                    flex: 1
                }}
            />

            <View style={{
                flexDirection: 'row',
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
                height: '80%',
                justifyContent: 'center',
                alignSelf: 'center'

            }}>
                <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
                <Text>Search</Text>
            </View>


        </View>
    )
}

export default SearchBar;
