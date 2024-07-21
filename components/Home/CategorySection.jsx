import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'


export default function CategorySection({ categorys }) {
    return (
        <TouchableOpacity>
            <View style={{ marginRight: 10, paddingHorizontal: 20, marginTop: 10, backgroundColor: Colors.LightPRIMARY, borderRadius: 8, padding: 8, alignItems: 'center' }}>
                <Image source={{ uri: categorys.imageUrl }} style={{ width: 35, height: 35, }} />
                <Text style={{ fontSize: 12, fontFamily: 'montesrratMedium', marginTop: 5 }}>{categorys.name || 'dd'}</Text>
            </View>
        </TouchableOpacity>
    )
}