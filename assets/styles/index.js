import { StyleSheet, Dimensions } from 'react-native';

//Theme
const PRIMARY_COLOR = '#FF2D55';
const SECONDARY_COLOR = '#424242';
const BACKGROUND_COLOR = '#fff';
const TEXT_COLOR = '#FFFFFF';
const WHITE = "#FFFFFF";
const LIGHTGRAY = "#E8E8E8";
const LESSLIGHTGRAY = '#DCDCDC';
const GRAY = "#757E90";
const LESS_DARK_GRAY = "#909090";
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
  XXXS: 12,
  XXXS: 13,
  XS: 14,
  S: 18,
  SM: 20,
  M: 24,
  ML: 30,
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
    margin: 10,
  },
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    height: DIMENSION_HEIGHT - 190,
    width: DIMENSION_WIDTH - 20,
    borderRadius: 10,
  },
  card: {
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
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  drumstick: {
    color: LESSLIGHTGRAY,
    marginRight: 10,
    fontSize: FONTSIZE.M,
  },
  settings: {
    color: LESSLIGHTGRAY,
    marginLeft: 10,
    fontSize: FONTSIZE.M,
  },
  overlayLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  overlayLabelText: {
    fontSize: 25,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  locationText: {
    color: GRAY,
    fontSize: FONTSIZE.XS,
  },
  logo: {
    width: FONTSIZE.M,
    height: FONTSIZE.M,
  },
  kackleText: {
    fontSize: FONTSIZE.S,
    color: PRIMARY_COLOR
  },
  searchBar: {
    backgroundColor: BACKGROUND_COLOR,
    borderColor: BACKGROUND_COLOR,
    borderWidth: 0,
  },
  searchBarInput: {
    height: 30,
    backgroundColor: LIGHTGRAY,
  },
  avatar: {
    borderRadius: 5
  },
  settingsText : {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 40,
    color: LESS_DARK_GRAY,
    fontWeight: '500',
    fontSize: FONTSIZE.XXS,
  },
  toggle: {
    color: PRIMARY_COLOR
  },
  thumbStyleSettings: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  distanceTracking: {
    color: GRAY
  },
  sliderBackground: {
    backgroundColor: WHITE,
  },
  maxDistanceStyle: {
    backgroundColor: WHITE,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  pastSearchesTitle: {
    color: GRAY,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5
  },
  detailsContainer: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 20,
    width: '100%',
  },
  detailsTitle: {
    fontSize: FONTSIZE.M,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ratingBox: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailsRating: {
    color: PRIMARY_COLOR,
  },
  detailsBox: {
    flexDirection: 'row',
  },
  detailed: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: 70,
  },
  detailsImage: {
    width: 20,
    height: 20,
  },
});



