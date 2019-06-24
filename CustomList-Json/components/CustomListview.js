import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (

    <View style={styles.container}>
        <FlatList
                data={itemList.results}
                renderItem={({ item }) => <CustomRow
                    title={<Text>{item.name.title} {item.name.first} {item.name.last}</Text>}
                    description={item.email}
                    image_url={item.picture.large}
                />}
            />

    </View>
);

export default CustomListview;