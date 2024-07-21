import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { Colors } from '@/constants/Colors'
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);


    return (
        <View>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 80
            }}>
                <Image source={require('./../assets/images/login.png')}
                    style={{
                        width: 250,
                        height: 450,
                        borderRadius: 20,
                        borderWidth: 3,
                        borderColor: '#000'
                    }} />
            </View>
            <View style={{ backgroundColor: '#fff', marginTop: -20 }}>
                <Text style={{ padding: 5, fontFamily: 'montesrratBold', fontSize: 23, textAlign: 'center' }}>Find Business Near You Or Add Your <Text style={{ color: Colors.PRIMARY }}>Business in Comminuty App</Text> </Text>
            </View>
            <View style={{
                marginTop: 20,
                paddingHorizontal: 40
            }}>
                <TouchableOpacity onPress={onPress} style={{
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 20,
                    padding: 15,
                }}><Text style={{ fontSize: 15, color: '#fff', fontFamily: 'montesrratBold', textAlign: 'center' }}>Let's Get Started</Text></TouchableOpacity>

            </View>
        </View>
    )
}