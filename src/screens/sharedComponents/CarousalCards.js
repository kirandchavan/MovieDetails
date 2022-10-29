import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, TouchableOpacity, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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

import * as action from '../movies/redux/MoviesActions'

const CarousalCards = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { popularMovies } = useSelector(state => state.moviesReducer);
  const { trandingMovies } = useSelector(state => state.moviesReducer);
  const [page, setpage] = useState(1)

  useEffect(() => {
    dispatch(action.getTraindingMovies())
    dispatch(action.getPopularMovies(page))
  }, [])

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

  const loadMoreData = (page) => {
    dispatch(action.getPopularMovies(page))
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }

  const setPageForLoadMore = () => {
    setIsLoading(true)
    setpage(page + 1)
    loadMoreData(page + 1)
  }

  const loadMoreMovies = () => {
    return (
      <View style={[Layouts.selfAlign, Layouts.row, Metrics.padding10]}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => setPageForLoadMore()} style={AppStyles.loadMoreBtn}>
          {isLoading ? <ActivityIndicator size={'small'} color="white" /> :
            <Label label={'load more'} labelStyle={[AppFontSizes.mulishRegularF14, { color: Colors.WHITE }]} />}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View key={'1'}>
      {/* Render now showing movies vertical card on dashboard */}
      <View style={[Layouts.flexRowSpaceBetween, Metrics.mh24]} key={'2'}>
        <Label labelStyle={[AppFontSizes.merriweather900]} label={subHeadings.NOW_SHOWING} />
        <AppButton
          title={buttonTitles.SEE_MORE}
          showLoader={false}
          styles={AppStyles.seeMoreBtn}
          textStyle={[AppFontSizes.mulishRegularF10, { color: Colors.BORDER }]}
        />
      </View>
      <View style={Metrics.mt6} key={'3'}>
        <ListCard
          data={trandingMovies}
          extraData={trandingMovies}
          renderItem={renderNowShowing}
          isHorizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 24, paddingRight: 40 }}
        />
      </View>

      {/* Render Popular movies vertical card on dashboard */}
      <View style={[Layouts.flexRowSpaceBetween, Metrics.mt24, Metrics.mh24]} key={'4'}>
        <Label labelStyle={[AppFontSizes.merriweather900]} label={subHeadings.POPULAR} />
        <AppButton
          title={buttonTitles.SEE_MORE}
          showLoader={false}
          styles={AppStyles.seeMoreBtn}
          textStyle={[AppFontSizes.mulishRegularF10, { color: Colors.BORDER }]}
        />
      </View>
      <View style={Metrics.mt6} key={'5'}>
        <ListCard
          data={popularMovies}
          extraData={popularMovies}
          renderItem={renderPopular}
          isHorizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 24, paddingRight: 40 }}
          ListFooterComponent={loadMoreMovies}
          onEndReachedThreshold={0.1}
          refreshing={isLoading}
        />
      </View>
    </View>
  );
};

export default CarousalCards;
