import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Buttons from '../Buttons/Buttons';
import styles from './styles';

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}> 
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.firstText}>{name}</Text>
          <Text style={styles.secondText}>
            {tagline}  <Text style={styles.subSecondText}>{taglineCTA ? taglineCTA : null}</Text>
          </Text>
        </View>

        <View style={styles.buttons}>
          <Buttons type="primary" text="custom order" />
          <Buttons type="secondaire" text="existing inventory" />
        </View>
      </View>
    )
}

export default CarItem
