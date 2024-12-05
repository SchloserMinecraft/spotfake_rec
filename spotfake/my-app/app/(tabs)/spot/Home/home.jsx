import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
    const [imageVisibility, setImageVisibility] = useState({
        black: false,
        Fallen: false,
        One: false,
        End:false,
    });

    const handlePress = (movie) => {
        setImageVisibility(prevState => ({
            ...prevState,
            [movie]: !prevState[movie],
        }));
    };
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Aqui estão algumas musicas que você talvez ira gostar:
                </Text>
            </View>
            <View style={styles.container}>
            <Pressable onPress={() => router.push('/spot/romance/romance')} 
            style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressablePressed
            ]}>
                    <Text style={styles.pressableText}>Black parade</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
            <Pressable onPress={() => router.push('/spot/fallen/fallen')} 
            style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressablePressed
            ]}>
                    <Text style={styles.pressableText}>Fallen</Text>
                </Pressable>
            </View>
           <View>

           <View style={styles.container}>
            <Pressable onPress={() => router.push('/spot/Animal/Animal')} 
            style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressablePressed
            ]}>
                    <Text style={styles.pressableText}>One-X</Text>
                </Pressable>
            </View>
            
                
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageContainer:{
        justifyContent:'center',
        
    },
   
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginBottom:'0px'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        marginTop:'230px'
    },
    header: {
        backgroundColor: '#1CF55D',
        padding: 30,
    },
    title: {
        fontWeight: 'bolder',
        fontSize: 40,
        fontFamily: 'helvetica-neue',
        color: 'white',
    },
    pressable: {
        backgroundColor: '#1CF55D',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        
    },
    pressablePressed: {
        backgroundColor: '#001F0D',
    },
    pressableText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    image: {
        
        width: 200,
        height: 150,
        margin: 5,
        
    },
});
