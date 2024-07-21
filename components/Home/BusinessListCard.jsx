import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons'

export default function BusinessListCard({ business }) {
    return (
        <TouchableOpacity>
            <View>
                <View style={{ padding: 10, backgroundColor: '#fff', borderRadius: 15, marginRight: 15, marginTop: 15, height: 305 }}>
                    <Image source={{ uri: business.bannerUrl }} style={{ width: 250, height: 160, borderRadius: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: 'montesrratBold', marginTop: 10 }}>{business.name}</Text>
                        <Text style={{ fontFamily: 'montesrrat', width: 250, marginTop: 7 }}>
                            <FontAwesome name="map-marker" size={16} color="red" /> {business.location}
                        </Text>
                        <View style={{
                            marginTop: 7,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{ fontFamily: 'montesrratBold' }}><FontAwesome name="star" size={16} color="orange" /> 4.8 <Text style={{ fontSize: 12, color: '#000' }}>({business.total_review})</Text> </Text>
                            <Text style={{ fontSize: 12, backgroundColor: Colors.PRIMARY, color: '#fff', padding: 5, fontFamily: 'montesrratBold', borderRadius: 5 }}>{business.category}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}