import React from 'react'
import { Platform, View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    shadowI: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.33,
        shadowRadius: 3,
        height: height * 0.20
    },
    shadowA: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        borderWidth: 0,
        elevation: 2,
        height: height * 0.20
    },
    description:{
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 10
        
    },
    body: {
        fontSize: 13,

    },
    imagePost: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export const Post = (props) => {
    return(
        <View style={Platform.OS === 'ios' ? styles.shadowI : styles.shadowA}>
            <View style={styles.description}>
            <ImageBackground 
                source={props.url}
                style={styles.imagePost}
            >
                <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
            </ImageBackground>
            </View>
        </View>
    )
}