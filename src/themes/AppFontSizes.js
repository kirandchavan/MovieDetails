import Colors from "./Colors";

/**
 * fonts for the application
 */

const APPFONTS = {
  mulishRegular: 'Mulish-Regular',
  mulishBold: 'Mulish-Bold',
  merriweather: 'Merriweather-Black',
}

/**
 * font sizes for the application
 */

const SIZES = {
  f8: 8,
  f9: 9,
  f10: 10,
  f10p5: 10.5,
  f11: 11,
  f11p38: 11.38,
  f12: 12,
  f13: 13,
  f14: 14,
  f16: 16,
  f17: 17,
  f18: 18,
  f20: 20,
  f36: 36
}

const AppFontSizes = {
  merriweather900: { fontFamily: APPFONTS.merriweather, fontSize: SIZES.f16, letterSpacing: 0.2 },
  mulishRegularF10: { fontFamily: APPFONTS.mulishRegular, fontSize: SIZES.f10, letterSpacing: 0.2 },
  mulishRegularF12: { fontFamily: APPFONTS.mulishRegular, fontSize: SIZES.f12, letterSpacing: 0.2, color: Colors.RATE_GREY },
  mulishRegularF14: { fontFamily: APPFONTS.mulishRegular, fontSize: SIZES.f14, letterSpacing: 0.2, color: Colors.BLACK },
  mulishBoldTitleF14: { fontFamily: APPFONTS.mulishBold, fontSize: SIZES.f14, letterSpacing: 0.2 },
  mulishBoldF8: { fontFamily: APPFONTS.mulishBold, fontSize: SIZES.f8, letterSpacing: 0.2, color: Colors.PURPLE_CATEGORY }
};

export default AppFontSizes;
