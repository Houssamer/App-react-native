import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import styles from './styles';
import CarItem from '../CarItem/CarItem';
import cars from './cars';

const CarList = () => {
  return (
    <View style={styles.carList}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={item => item.name}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  );
};

export default CarList;
