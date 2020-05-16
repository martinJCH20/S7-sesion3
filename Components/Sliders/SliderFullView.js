import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollIndicator: {
        top: 10,
        left: 10,
        bottom: 10,
        right: 10
    }
})

export default class SliderFullView extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { children } = this.props;
        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                scrollIndicatorInsets={styles.scrollIndicator}
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
                    // console.warn(logData);
                }}
                scrollEventThrottle={10}
            >
                {children}
            </ScrollView>
        )
    }
}