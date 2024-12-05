import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Pressable, Text } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function App() {
    const logoToddyn = 'https://m.media-amazon.com/images/I/51rttY7a+9L.png';
    const router = useRouter();
    return (
        <ImageBackground
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <LinearGradient
                    colors={['#49F551', 'transparent']}
                    style={styles.backgroundGradient}
                />
                
                <Image
                    style={styles.logo}
                    source={{
                        uri: logoToddyn
                    }}
                />
                <Pressable onPress={() => router.push('/spot/hub/login')}>
                    <Text style={styles.linkText}>entrar</Text> {/* Corrigido o uso de Text */}
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    logo: {
        width: 250,
        height: 250,
        backgroundColor: 'transparent',
    },
    linkText: {
        color: 'white',
        fontSize: 18,
    },
});
