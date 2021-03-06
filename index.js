// Import libraries to help create a component
import React from 'react'
import { View, AppRegistry } from 'react-native'
import Header from './src/components/Header'
import AlbumList from "./src/components/AlbumList"

// Create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    )
};



// Render it

AppRegistry.registerComponent('albums', () => App)
