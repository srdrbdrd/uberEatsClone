import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//Main Component
const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton
                text="Delivery"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

//Sub Components
const HeaderButton = (props) => (
    <View>
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab === props.text ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15 }}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)

export default HeaderTabs;
