import { StyleSheet, Dimensions } from 'react-native';

//Theme
const PRIMARY_COLOR = '#FF2D55';
const SECONDARY_COLOR = '#424242';
const BACKGROUND_COLOR = '#fff';
const TEXT_COLOR = '#FFFFFF';

const X_COLOR = ''
const HEART_COLOR = '#FF2D55';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: 400,
    width: 300,
    borderRadius: 20,
  },
  x: {
    color: SECONDARY_COLOR
  },
  like: {
    color: HEART_COLOR,
  }
});



