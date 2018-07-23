import React from 'react'
import { Text, View, Image, StyleSheet, Linking } from "react-native"
import Card from './Card'
import CardSection from './CardSection'
import Button from "./Button";

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url} = album
    const { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainer, mainImageStyle } = styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer} >
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image}}/>
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{uri: image}} style={mainImageStyle}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=> Linking.openURL(url)} >
                    <Text>Buy Now</Text>
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight:10
    },
    mainImageStyle: {
        height: 300,
        flex: 1,
        width: null,

    }
})
export default AlbumDetail