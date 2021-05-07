import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('screen').height,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
  titles: {
    marginTop: '30%',
    alignItems: 'center',
    fontFamily: 'montserrat',
  },
  firstText: {
    fontSize: 24,
    fontWeight: '700',
  },
  secondText: {
    fontSize: 16,
    fontWeight: '100',
  },
  subSecondText: {
    textDecorationLine: 'underline',
  },
  buttons: {
    position: 'absolute',
    bottom: '12%',
    width: '100%',
    height: "13%",
    alignItems: "center",
    justifyContent: "space-between"

  },
});
