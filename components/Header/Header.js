import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image
                source={require('../../assets/images/menu.png')}
                style={styles.menu}
            />
        </TouchableOpacity>
    </View>
  );
};

export default Header;
