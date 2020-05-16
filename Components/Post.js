import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
    post: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    description:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },
    title: {
        fontSize: 14,
        
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
        <View style={styles.post}>
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