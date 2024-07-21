import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import BusinessListCard from './BusinessListCard'
import { db } from '../../config/firebaseConfig'

export default function PopularBuinsess() {
    const [businessList, setBusinessList] = useState([])

    const GetBusinessList = async () => {
        setBusinessList([])
        const q = query(collection(db, 'BusinessList'), limit(10))
        const querySnapSots = await getDocs(q)

        querySnapSots.forEach((doc) => {
            setBusinessList(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        GetBusinessList()
    }, [])

    return (
        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <Text style={{ fontSize: 16, fontFamily: 'montesrratBold' }}>Popular Business</Text>
                <Text style={{ color: Colors.PRIMARY, fontSize: 14, fontFamily: 'montesrratMedium' }}>View All</Text>
            </View>

            <FlatList
                horizontal={true}
                data={businessList}
                showsHorizontalScrollIndicator={false} renderItem={({ item }) => <BusinessListCard business={item} />} />
        </View>
    )
}