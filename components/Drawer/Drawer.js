import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Alert } from 'react-native';

function Drawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem 
                label="EXISTING INVENTORY"
                onPress={() => Alert.alert(
                    "Comming soon",
                    "this feature is not available now"
                )}
            />
            <DrawerItem 
                label="USED INVENTORY"
                onPress={() => Alert.alert(
                    "Comming soon",
                    "this feature is not available now"
                )}
            />
            <DrawerItem 
                label="TRADE-IN"
                onPress={() => Alert.alert(
                    "Comming soon",
                    "this feature is not available now"
                )}
            />
            <DrawerItem 
                label="CYBERTRUCK"
                onPress={() => Alert.alert(
                    "Comming soon",
                    "this feature is not available now"
                )}
            />
            <DrawerItem 
                label="CLOSE"
                onPress={() => props.navigation.closeDrawer()}
            />
        </DrawerContentScrollView>
    )
}

export default Drawer;