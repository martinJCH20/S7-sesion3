import React, { Component } from 'react'
import { View, Text, Image, ScrollView, ImageBackground, StatusBar, StyleSheet, FlatList, SafeAreaView } from 'react-native'
//import firebase from '@react-native-firebase/app'
//import remoteConfig from '@react-native-firebase/remote-config';
import { Post } from '../Components/PostSpla'
// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
   accessKey: "n1HNzs0Ay9zbNz20G4Hef0aA1xMBVeKqfwVGzEBgXiI",
//   // Optionally you can also configure a custom header to be sent with every request
//   // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
   timeout: 100 // values set in ms
 });
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    post: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    title: {
        flex: 0.5
    },
    description:{
        flex: 0.5
    }
})
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            postList: [
                {id: 1, title: 'Splash 1', image: require('../../assets/slider1.jpeg'), title: 'Step 1'},
                {id: 2, title: 'Splash 2', image: require('../../assets/slider2.jpeg'), title: 'Step 2'},
                {id: 3, title: 'Splash 3', image: require('../../assets/slider3.jpeg'), title: 'Step 3'},
                {id: 4, title: 'Splash 4', image: require('../../assets/slider4.jpeg'), title: 'Step 4'},
                {id: 5, title: 'Splash 5', image: require('../../assets/slider5.jpeg'), title: 'Step 5'},
                {id: 6, title: 'Splash 6', image: require('../../assets/slider6.jpeg'), title: 'Step 6'},
            ],
            isFetching: false,
            data: [],
            images: []
        }
    }
    componentDidMount(){
        console.warn('this.state.data', this.state.data)
        //this.getImages();
         //this.getPost();      
        
    }

    getImages = async () =>{
        unsplash.photos.getRandomPhoto({ count: "10" })
        .then((res)=> {
            console.warn('res', res)
            return res.json();
        })
        .then(json => {
            console.warn('json', json)
            const imagesJson = json.map((item) => {
                 return item.urls
            })
            this.setState({images: imagesJson})
            console.warn('imagesJson', imagesJson)
        })
        .catch((error)=> console.warn('error', error))
    }

    getPost = async () => {
        const { postList, images } = this.state;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=> {
                return res.json();
            })
            .catch((error)=> console.warn('error', error))
            .then((res)=> {
                console.warn('res postList', res)
                console.warn('images', images)
                // const imgFull = images.map((ele) => {
                //     console.warn('ele', ele);
                //     return ele.full
                // })
                // console.warn('imgFull', imgFull)
                // const post = res.map((item) => {
                //     return item['urls'].push()
                // })

                this.setState({
                    postList: res,
                    isFetching: false
                })
            })
    }
    onRefresh = async() => {
        this.setState({
            isFetching: true
        })
       await this.getPost()
    }
    render(){
        const { postList, isFetching } = this.state;
        console.warn('isFetching', isFetching)
        return(
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                {postList ? (
                    <FlatList
                    data={postList}
                    renderItem={({item}) => (
                        <Post title={item.title} url={item.image}/>
                    )}
                    keyExtractor={item => item.id}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    updateCellsBatchingPeriod={500}
                    initialNumToRender={8}
                    windowSize={10}
                    onRefresh={()=> this.onRefresh()}
                    refreshing={isFetching}
                    />
                ) : null}
            </View>
        )
    }
}