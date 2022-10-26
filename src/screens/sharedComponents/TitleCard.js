import React from 'react'
import { Image, View } from 'react-native'
import Label from '../../components/Label'
import AppFontSizes from '../../themes/AppFontSizes'
import AppStyles from '../../themes/AppStyles'
import Layouts from '../../themes/Layouts'
import AssetImages from '../../constants/ImageConstants'
import Metrics from '../../themes/Metrics'
import { checkRating } from '../../utils/GlobalFunctions'

const TitleCard = ({ title, avgRating, hideRating, style }) => {
    return (
        <>
            <Label
                label={title}
                labelStyle={[AppFontSizes.mulishBoldTitleF14, AppStyles.titleText, style]}
                numberOfLines={2}
            />
            {!hideRating && <View style={[Layouts.rowAlignCenter, Metrics.mt8]}>
                <Image source={AssetImages.ratingStar} style={AppStyles.smallIcon} />
                <Label
                    label={`${checkRating(avgRating)}/10 IMDb`}
                    labelStyle={[AppFontSizes.mulishRegularF12, Metrics.ml4]}
                    numberOfLines={2}
                />
            </View>}
        </>
    )
}

export default TitleCard