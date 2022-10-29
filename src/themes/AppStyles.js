import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

const { width, height } = Dimensions.get('window');

const AppStyles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    marginTop: 6,
    fontSize: 12,
    color: Colors.ERROR,
  },
  loaderStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  backIconHeader: {
    width: 24,
    height: 24
  },
  navBarStyle: {
    height: 60,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 24,
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  seeMoreBtn: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    // backgroundColor: Colors.BTN_BG,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4
  },
  fullWidthImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  titleText: {
    color: Colors.BLACK,
    width: 140,
  },
  smallIcon: {
    width: 12,
    height: 12
  },
  categories: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 25,
    backgroundColor: Colors.LIGHT_PURPLE
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 6
  },
  searchIcons: {
    width: 20,
    height: 20
  },
  loginBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    // backgroundColor: Colors.BTN_BG,
    padding: 10,
    width: '100%',
    marginTop: 24,
    alignItems: 'center',
    backgroundColor: Colors.PURPLE_CATEGORY
  },
  searchBorder: {
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: Colors.BORDER
  },
  loadMoreBtn: {
    padding: 15,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE
  }
});

export default AppStyles;
