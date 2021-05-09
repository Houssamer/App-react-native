import React from 'react'
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import CarList from '../components/CarList/CarList'
import Header from '../components/Header/Header'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Header navigation={navigation} />
        <CarList />
      <StatusBar style="light" />
    </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('screen').height,
      },
})
