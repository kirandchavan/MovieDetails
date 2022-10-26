import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Layouts from '../../themes/Layouts'
import AppButton from '../../components/AppButton'
import { buttonTitles, subHeadings } from '../../constants/TextConstants'
import AppStyles from '../../themes/AppStyles'
import AppFontSizes from '../../themes/AppFontSizes'
import Colors from '../../themes/Colors'
import Label from '../../components/Label'
import Metrics from '../../themes/Metrics'
import AssetImages from '../../constants/ImageConstants'
import { checkRating } from '../../utils/GlobalFunctions'
import data from '../../constants/data.json'
import CategoriesCard from './CategoriesCard'
import OverviewCard from './OverviewCard'
import MovieDetails from './MovieDetails'
import ListCard from './ListCard'
import CastCard from './CastCard'

const DescriptionCard = ({ casts, movieDetail }) => {
    const renderCast = (item, index) => {
        return (
            <CastCard item={item} index={index} />
        )
    };

    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={[Metrics.mt24]}>
                <View style={[Layouts.flexRowSpaceBetween, Metrics.mh24]}>
                    <Label labelStyle={[AppFontSizes.merriweather900, { width: '60%' }]} label={movieDetail.title} />
                    <Pressable>
                        <Image source={AssetImages.moviesAdded} style={AppStyles.bottomTabIcon} />
                    </Pressable>
                </View>
                <View style={[Metrics.mh24, Layouts.row, Metrics.mt8]}>
                    <Image source={AssetImages.ratingStar} style={AppStyles.smallIcon} />
                    <Label
                        label={`${checkRating(movieDetail.vote_average)}/10 IMDb`}
                        labelStyle={[AppFontSizes.mulishRegularF12, Metrics.ml4]}
                        numberOfLines={2}
                    />
                </View>
                <View style={Metrics.mt16}>
                    {movieDetail?.genres && <CategoriesCard item={movieDetail} key={1} sliderWidth={0.9} isDetails={true} />}
                </View>
                <View style={[Metrics.mt16, Layouts.flexRowSpaceBetween]}>
                    <OverviewCard runtime={movieDetail.runtime} language={movieDetail?.spoken_languages?.[0].name} rating={movieDetail.vote_average} />
                </View>
                <View style={[Metrics.mt24, Metrics.mh24]}>
                    <MovieDetails overview={movieDetail.overview} />
                </View>
                <View style={[Layouts.flexRowSpaceBetween, Metrics.mt24, Metrics.mh24]}>
                    <Label labelStyle={[AppFontSizes.merriweather900]} label={subHeadings.CAST} />
                    <AppButton
                        title={buttonTitles.SEE_MORE}
                        showLoader={false}
                        styles={AppStyles.seeMoreBtn}
                        textStyle={[AppFontSizes.mulishRegularF10, { color: Colors.BORDER }]}
                    />
                </View>

                <View style={Metrics.mt16}>
                    <ListCard
                        data={casts}
                        extraData={casts}
                        renderItem={renderCast}
                        isHorizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginLeft: 24, paddingRight: 40 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default DescriptionCard