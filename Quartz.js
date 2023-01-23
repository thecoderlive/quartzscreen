import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ArDetail from './ArDetail'

const Quartz = () => (
<ScrollView style={styles.quartz} showsVerticalScrollIndicator={false}>
<Text style={styles.title}>{item.title}</Text>
<Image
    style={styles.object_icon}
    source={{uri: item.object_icon}}
   />
<Text style={styles.about_object}>{item.about_object}</Text>
<ArDetail item={item.ar_detail}/>
</ScrollView>
)

export default Quartz;

const styles = StyleSheet.create({
    'title': {
        'color': '#060505',
        'fontSize': 36,
        'fontWeight': '800',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'object_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5,
        'marginLeft': 10
    },
    'about_object': {
        'fontSize': 16,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginBottom': 10
    }
});