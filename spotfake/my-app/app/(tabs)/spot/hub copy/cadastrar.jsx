import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function Hub() {
    const router = useRouter();

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Spotify</Text>
            </View>

            <View style={styles.aboutMeContainer}>
                <Text style={styles.aboutMeTitle}></Text>
                <Text style={styles.aboutMeText}>
                     Cadastro
                </Text>
            </View>
<View style={styles.container}>
                <Text style={styles.linkText}>nome</Text>
           <TextInput placeholder="Escolha um belo nome!" style={styles.textinputname}></TextInput>
            <View style={styles.container}>
                 

                    <Text style={styles.linkText}>email</Text>
               <TextInput placeholder="example@gmail.com" style={styles.textinputname}></TextInput>
            </View>
            <View style={styles.container}>
                
                    <Text style={styles.linkText}>Senha</Text>
               <TextInput placeholder="sua senha" style={styles.textinputname}></TextInput>
            </View>
            
               
        </View>
            
            
            
            <View style={styles.container}>
                <Pressable onPress={() => router.push('/spot/Home/home')}>
                    <Text style={styles.linkText}>entrar</Text>
                </Pressable>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        gap: 25,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: 'green',
        padding: 30,
        
        textAlign:'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'helvetica-neue',
        color: 'white',
        textAlign:'center',
    },
    aboutMeContainer: {
        padding: 20,
        backgroundColor: '#e6e6e6',
        margin: 20,
        borderRadius: 10,
       
    },
    textinputname:{
        borderColor:'black',
        borderWidth:'2px',
        borderRadius:'7px',
        color:'gray'
    },
    aboutMeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutMeText: {
        fontSize: 27,
        lineHeight: 26,
        textAlign:'center',
    },
    linkText: {
        fontSize: 20,
        color: 'black',
    },
});
