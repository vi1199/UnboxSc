import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    ImageBackground,
    Linking,
    Share
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

export default class Items extends Component {
    shareArticle= (item)=> {
        console.log('pressed', item)
        Share.share({
            message: `Checkout this article from ScoopWhoop ${item}`
        })
    }
    render() {
        const {description, title, thumbnail, pubDate, link, author}= this.props.feed;
        const defaultImg= "https://s4.scoopwhoop.com/v4/static/sw/images/sw_logo_bg.png";
        const time= moment(pubDate || moment.now()).fromNow()
        return(
            <View style= {styles.card}>
                <TouchableNativeFeedback
                    useForeground
                    onPress= {()=> Linking.openURL(link)}>
                    <ImageBackground
                        source= {{uri: thumbnail || defaultImg}}
                        resizeMethod= 'resize'
                        imageStyle= {{borderRadius: 7}}
                        style= {styles.imgStyle}>
                        <View style= {{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                            <Text style= {styles.textStyle}>{description}</Text>
                        </View>
                    </ImageBackground>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    useForeground
                    onPress= {()=> Linking.openURL(link)}>
                    <Text style= {styles.titleStyle}>{title}</Text>
                </TouchableNativeFeedback>
                <View style= {styles.content}>
                    <View style= {styles.contentInside}>
                        <Text>{author}</Text>
                        <Icon
                            style= {styles.iconStyle}
                            name= "circle"
                            size= {5}
                            color= "black"/>
                        <Text>{time}</Text>
                    </View>
                    <TouchableNativeFeedback
                        onPress= {()=> this.shareArticle(link)} >
                        <Icon
                            style= {styles.shareStyle}
                            name= "share"
                            size= {12}
                            color= "grey"/>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 7,
        elevation: 1,
        backgroundColor: 'white',
    },
    imgStyle: {
        justifyContent: 'flex-end',
        height: 220,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentInside: {
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textStyle: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: 'white'
    },
    iconStyle: {
        paddingHorizontal: 4,
    },
    shareStyle: {
        padding: 10
    },
    titleStyle: {
        color: 'black',
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 10,
        fontWeight: '500'
    }
})