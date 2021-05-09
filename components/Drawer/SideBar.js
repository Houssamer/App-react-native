import React from 'react'
import { StyleSheet, View } from 'react-native'

const SideBar = (props) => {
    return (
        <View style={styles.container}>
            <DrawerNavigatorItems style={styles.text} />
        </View>
    )
}

export default SideBar

const styles = StyleSheet.create({})
