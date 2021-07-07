import { StyleSheet, Dimensions } from 'react-native';

//Theme
const PRIMARY_COLOR = '#7444C0';
const SECONDARY_COLOR = '#5636B8';

const HEART_COLOR = 'purple';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: 10,
    borderRadius: 1,
    borderColor: 'black',
  }
});



