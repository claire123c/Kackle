import { StyleSheet, Dimensions } from 'react-native';

//Theme
const PRIMARY_COLOR = '#FF2D55';
const SECONDARY_COLOR = '';
const BACKGROUND_COLOR = '#fff';
const TEXT_COLOR = '#FFFFFF';

const HEART_COLOR = '#FF2D55';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: 400,
    width: 300,
    borderRadius: 20,
  },
  header: {

  },
  like: {
    color: HEART_COLOR,
    borderRadius: 1,
    borderColor: 'black',
  }
});



