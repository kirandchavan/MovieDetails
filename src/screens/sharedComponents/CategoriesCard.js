import React from 'react'
import { Dimensions, View, } from 'react-native'
import Layouts from '../../themes/Layouts'
import Metrics from '../../themes/Metrics'
import data from '../../constants/data.json'
import AppButton from '../../components/AppButton'
import AppStyles from '../../themes/AppStyles'
import AppFontSizes from '../../themes/AppFontSizes'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5)

const CategoriesCard = ({ item, sliderWidth, key, isDetails }) => {
    return (
        <View style={[Layouts.rowAlignCenter, Layouts.wrap, Metrics.mt8, Metrics.ml8, { width: SLIDER_WIDTH * sliderWidth }]}>
            {isDetails ?
                item.genres.map(item => {
                    return (
                        <View style={[Metrics.ml8, Metrics.mt10]} key={key}>
                            <AppButton
                                title={item.name.toUpperCase()}
                                showLoader={false}
                                styles={AppStyles.categories}
                                textStyle={[AppFontSizes.mulishBoldF8]}
                            />
                        </View>)
                }) :
                item.genre_ids.map(item => {
                    return (
                        <View style={[Metrics.ml8, Metrics.mt10]} key={key}>
                            <AppButton
                                title={data[item].name.toUpperCase()}
                                showLoader={false}
                                styles={AppStyles.categories}
                                textStyle={[AppFontSizes.mulishBoldF8]}
                            />
                        </View>)
                })
            }
        </View>
    )
}

export default CategoriesCard