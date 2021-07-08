import { StyleSheet, Dimensions } from 'react-native';

//Theme
const PRIMARY_COLOR = '#FF2D55';
const SECONDARY_COLOR = '#424242';
const BACKGROUND_COLOR = '#fff';
const TEXT_COLOR = '#FFFFFF';

const X_COLOR = ''
const HEART_COLOR = '#FF2D55';
const BUTTON_OUTLINE = '#eee';
const BUTTON_SHADOW = 'rgba(0, 0, 0, 0.05)';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const FONTSIZE = {
  XS: 6,
  S: 12,
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
  main: {
    height: 400,
    width: 300,
    borderRadius: 20,
  },
  x: {
    color: SECONDARY_COLOR,
    fontSize: FONTSIZE.M,
    padding: 5,
    borderColor: BUTTON_OUTLINE,
    borderWidth: 10,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 1,
    shadowColor: BUTTON_SHADOW,
    elevation: 5,
  },
  like: {
    color: HEART_COLOR,
    fontSize: FONTSIZE.SM,
    padding: 7,
    borderColor: BUTTON_OUTLINE,
    borderWidth: 10,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 1,
    shadowColor: BUTTON_SHADOW,
    elevation: 5,
  },
  button: {
    backgroundColor: 'clear',

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



