import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
export default function romance() {
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
                    Sobre black Parade:
                </Text>
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('black')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>the black parade</Text>
                </Pressable>
                
                {imageVisibility.black && (
 <View style={styles.imageContainer}>
 {/* Imagem */}
 <Image
   source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/d/dc/The_Black_Parade.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>Esta é a capa do álbum "The Black Parade" da banda My Chemical Romance.</Text>
 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>Lançado na Europa em 23 de outubro de 2006 e nos Estados Unidos em 24 de outubro de 2006, pela Reprise Records.</Text>
  {/* Texto abaixo da imagem */}
  <Text style={styles.imageText}>Musicas lançadas:</Text>
 <Image
   source={{ uri: 'https://i.ytimg.com/vi/XkCA2XqUJ4o/maxresdefault.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>The end</Text>

 <Image
   source={{ uri: 'https://i.ytimg.com/vi/XkCA2XqUJ4o/maxresdefault.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>Dead!</Text>
 <Image
   source={{ uri: 'https://cdn-images.dzcdn.net/images/cover/7de7f459731b593015f14edf6b9f76b6/0x1900-000000-80-0-0.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>Welcome to the black parade</Text>

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
