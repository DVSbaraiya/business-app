import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'
import { FlatList } from 'react-native'

export default function Slider() {
    const [sliderData, setSliderData] = useState([])

    const getSliderData = async () => {
        setSliderData([])
        const q = query(collection(db, 'slider'))
        const querySnapSots = await getDocs(q)
        querySnapSots.forEach((doc) => {
            setSliderData(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        getSliderData()
    }, [])
    return (
        <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 16, fontFamily: 'montesrratBold', marginBottom: 10 }}>#Best For You</Text>

            <FlatList
                horizontal={true}
                data={sliderData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Image source={{ uri: item.imageUrl }} style={{ width: 310, height: 180, borderRadius: 10, marginRight: 15 }} />}
            />
        </View>
    )
}