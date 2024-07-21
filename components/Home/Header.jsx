import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from './../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const { user } = useUser()
    return (
        <View style={{
            padding: 20,
            paddingTop: 60,
            backgroundColor: Colors.PRIMARY,
            borderBottomRightRadius: 20,
        }}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                flexDirection: 'row'
            }}>
                <Image source={{ uri: user?.imageUrl }} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50
                }} />
                <View>
                    <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'montesrrat' }}>Welcome home,</Text>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'montesrratMedium' }}>{user?.fullName}</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                padding: 5,
                marginTop: 30
            }}>
                <FontAwesome name="search" size={20} style={{ padding: 2 }} color={Colors.PRIMARY} />
                <TextInput placeholder='Search..' style={{ fontSize: 16 }} />
            </View>
        </View>
    )
}