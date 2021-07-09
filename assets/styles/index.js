import { StyleSheet, Dimensions } from 'react-native';

//Theme
const PRIMARY_COLOR = '#FF2D55';
const SECONDARY_COLOR = '#424242';
const BACKGROUND_COLOR = '#fff';
const TEXT_COLOR = '#FFFFFF';
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const X_COLOR = '#FF2D55';
const HEART_COLOR = '#3b7';
const SUPERLIKE = '#3498db';
const BUTTON_OUTLINE = '#eee';
const BUTTON_SHADOW = 'rgba(0, 0, 0, 0.05)';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const FONTSIZE = {
  XS: 12,
  S: 18,
  SM: 20,
  M: 24,
  L: 36,
  XL: 48,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    height: DIMENSION_HEIGHT - 200,
    width: DIMENSION_WIDTH - 70,
    borderRadius: 5,
  },
  card: {
    height: DIMENSION_HEIGHT - 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 5,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  x: {
    backgroundColor: WHITE,
  },
  like: {
    backgroundColor: WHITE,
  },
  star: {
    backgroundColor: WHITE,
    padding: 2,
  },
  button: {
    backgroundColor: BACKGROUND_COLOR,
  },
  drumstick: {
    color: SECONDARY_COLOR,
    marginRight: 10,
    fontSize: FONTSIZE.M,
  },
  settings: {
    color: SECONDARY_COLOR,
    marginLeft: 10,
    fontSize: FONTSIZE.M,
  }
});



