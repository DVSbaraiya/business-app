import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'
import { FlatList } from 'react-native'
import { Colors } from '../../constants/Colors'
import CategorySection from './CategorySection'

export default function Category() {

    const [categoryData, setCategoryData] = useState([])

    const getCategoryData = async () => {
        setCategoryData([])
        const q = query(collection(db, 'Category'))
        const querySnapSots = await getDocs(q)
        querySnapSots.forEach((doc) => {
            setCategoryData(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        getCategoryData()
    }, [])
    return (
        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <Text style={{ fontSize: 16, fontFamily: 'montesrratBold' }}>Business Category</Text>
                <Text style={{ color: Colors.PRIMARY, fontSize: 14, fontFamily: 'montesrratMedium' }}>View All</Text>
            </View>

            <FlatList
                horizontal={true}
                data={categoryData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CategorySection categorys={item} />}
            />

        </View>
    )
}