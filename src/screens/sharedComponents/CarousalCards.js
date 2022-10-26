import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Dimensions, } from 'react-native';
import AppButton from '../../components/AppButton';
import Label from '../../components/Label';
import { buttonTitles, subHeadings } from '../../constants/TextConstants';
import AppFontSizes from '../../themes/AppFontSizes';
import AppStyles from '../../themes/AppStyles';
import Colors from '../../themes/Colors';
import Layouts from '../../themes/Layouts';
import Metrics from '../../themes/Metrics';
import ListCard from './ListCard';
import NowShowingMoviesCard from './NowShowingMoviesCard';
import PopularMoviesCard from './PopularMoviesCard';

const CarousalCards = ({ data, popular }) => {
  const navigation = useNavigation();

  // Render now showing movies cards 
  const renderNowShowing = (item, index) => {
    return (
      <NowShowingMoviesCard item={item} index={index} />
    )
  };

  // Render popular movies cards 
  const renderPopular = (item, index) => {
    return (
      <PopularMoviesCard item={item} index={index} />
    )
  }

  return (
    <View >
      {/* Render now showing movies vertical card on dashboard */}
      <View style={[Layouts.flexRowSpaceBetween, Metrics.mh24]}>
        <Label labelStyle={[AppFontSizes.merriweather900]} label={subHeadings.NOW_SHOWING} />
        <AppButton
          title={buttonTitles.SEE_MORE}
          showLoader={false}
          styles={AppStyles.seeMoreBtn}
          textStyle={[AppFontSizes.mulishRegularF10, { color: Colors.BORDER }]}
        />
      </View>
      <View style={Metrics.mt6}>
        <ListCard
          data={data}
          extraData={data}
          renderItem={renderNowShowing}
          isHorizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 24, paddingRight: 40 }}
        />
      </View>

      {/* Render Popular movies vertical card on dashboard */}
      <View style={[Layouts.flexRowSpaceBetween, Metrics.mt24, Metrics.mh24]}>
        <Label labelStyle={[AppFontSizes.merriweather900]} label={subHeadings.POPULAR} />
        <AppButton
          title={buttonTitles.SEE_MORE}
          showLoader={false}
          styles={AppStyles.seeMoreBtn}
          textStyle={[AppFontSizes.mulishRegularF10, { color: Colors.BORDER }]}
        />
      </View>
      <View style={Metrics.mt6}>
        <ListCard
          data={popular}
          extraData={popular}
          renderItem={renderPopular}
          isHorizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 24, paddingRight: 40 }}
        />
      </View>
    </View>
  );
};

export default CarousalCards;
