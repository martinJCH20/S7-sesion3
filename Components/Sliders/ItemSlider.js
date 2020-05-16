import React, { Component } from 'react'
import { Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerSlider: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSlider: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
})

export default class ItemSlider extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { image, title} = this.props;
        return(
            <ImageBackground 
                source={image}
                style={styles.containerSlider}>
                <Text style={styles.textSlider}>
                    {title}
                </Text>
            </ImageBackground>
        )
    }
}