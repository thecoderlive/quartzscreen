import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const arDetailItem = ({ item }) => (
<View style={styles.ar_detail_item}>
<Image
    style={styles.ar_image}
    source={{uri: item.ar_image}}
    />
<Text style={styles.about_ar}>{item.about_ar}</Text>
</View>
  );

const ArDetail = ({ item }) => (
<FlatList
    style={styles.ar_detail}
    data={item}
    renderItem={arDetailItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ArDetail;

const styles = StyleSheet.create({
    'ar_image': {
        'width': '95vw',
        'height': '45vw',
        'marginTop': 5,
        'alignSelf': 'center',
        'borderTopLeftRadius': 15,
        'borderTopRightRadius': 15
    },
    'about_ar': {
        'fontSize': 18,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#d1cccc',
        'marginBottom': 15
    }
});