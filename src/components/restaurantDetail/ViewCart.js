import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';

const ViewCart = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price))
        .reduce((prev, curr) => prev + curr, 0);


    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{total}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",
                                }}
                                onPress={() => {

                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                        top: 17,
                                    }}
                                >
                                    {total ? total : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)} >
                {checkoutModalContent()}
            </Modal>
            {total ?
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 15,
                    paddingHorizontal: 40,
                    borderRadius: 30,

                    position: 'absolute',
                    bottom: 40,
                    zIndex: 999,
                    alignSelf: 'center',


                }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>View Cart</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>{total + "$"}</Text>
                </TouchableOpacity>

                : null
            }
        </>
    )
}

export default ViewCart
