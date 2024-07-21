import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBuinsess from '../../components/Home/PopularBuinsess'

export default function home() {
    return (
        <ScrollView>
            {/* Header  */}
            <Header />

            {/* Slider  */}
            <Slider />

            {/* Icon Slider  */}
            <Category />

            {/* Business Cards  */}
            <PopularBuinsess />

            <View style={{ height: 50 }}></View>
        </ScrollView>
    )
}