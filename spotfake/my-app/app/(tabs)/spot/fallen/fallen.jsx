import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
export default function Fallen() {
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
                    onPress={() => handlePress('Fallen')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>Fallen</Text>
                </Pressable>
                {imageVisibility.Fallen && (
                    <View style={styles.imageContainer}>
                    {/* Imagem */}
                   
                    <Image
                        source={{ uri: 'https://m.media-amazon.com/images/I/7163tf7rbLL._UF894,1000_QL80_.jpg' }}
                        style={styles.image}
                    />
                    {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>Esta é a capa do álbum "Fallen" da banda Evanescence.</Text>
  {/* Texto abaixo da imagem */}
  <Text style={styles.imageText}>Fallen é o álbum de estreia da banda de rock americana Evanescence. Foi lançado em 4 de março de 2003 através da gravadora Wind-up Records.</Text>

    {/* Texto abaixo da imagem */}
    <Text style={styles.imageText}>Musicas lançadas:</Text>
    <Image
   source={{ uri: 'https://m.media-amazon.com/images/I/7163tf7rbLL._UF894,1000_QL80_.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>going under</Text>

 <Image
   source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/c/c8/Everybody%27s_Fool_Single_Cover.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>everybody’s fool</Text>
 <Image
   source={{ uri: 'https://www.vstopbrasil.com.br/wp-content/uploads/bring-me-to-life-evanescence-20242310118691711048-20242310119719561048.jpg' }}
   style={styles.image}
 />

 {/* Texto abaixo da imagem */}
 <Text style={styles.imageText}>bring me to life</Text>
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
