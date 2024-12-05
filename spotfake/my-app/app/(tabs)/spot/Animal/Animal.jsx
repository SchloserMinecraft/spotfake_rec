import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
export default function Animal() {
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

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Sobre Fallen:
                </Text>
            </View>
            
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('One')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>One-X</Text>
                </Pressable>
                
                {imageVisibility.One && (
                      <View style={styles.imageContainer}>
                      {/* Imagem */}
                    <Image
                        source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/c7f57c5507ba7753412f52371b475806/1900x1900-000000-80-0-0.jpg' }}
                        style={styles.image}
                    />
                    {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>Esta é a capa do álbum "One-X" da banda Three Days Grace.</Text>
  {/* Texto abaixo da imagem */}
  <Text style={styles.imageText}>One-X é o segundo álbum de estúdio da banda de rock canadense Three Days Grace, lançado em 13 de junho de 2006 como seu único álbum pela Sony BMG. </Text>
  {/* Texto abaixo da imagem */}
  <Text style={styles.imageText}>Musicas lançadas:</Text>
                    <Image
                        source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/c7f57c5507ba7753412f52371b475806/1900x1900-000000-80-0-0.jpg' }}
                        style={styles.image}
                    />
                    {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>it's all over</Text>
 <Image
                        source={{ uri: 'https://i.scdn.co/image/ab67616d0000b27338674ce900e50b896dc1c97c' }}
                        style={styles.image}
                    />
                    {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>animal i have become</Text>
 <Image
                        source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/c7f57c5507ba7753412f52371b475806/1900x1900-000000-80-0-0.jpg' }}
                        style={styles.image}
                    />
                    {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>on my own</Text>

</View>
                )}
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
        marginTop:'10px'
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
