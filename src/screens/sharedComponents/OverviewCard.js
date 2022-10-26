import { View } from 'react-native'
import React from 'react'
import Layouts from '../../themes/Layouts'
import Label from '../../components/Label'
import AppFontSizes from '../../themes/AppFontSizes'
import { labels } from '../../constants/TextConstants'
import Metrics from '../../themes/Metrics'
import Colors from '../../themes/Colors'
import { convertMovieRuntimeToHrsMin } from '../../utils/GlobalFunctions'

const OverviewCard = ({ runtime, language, rating }) => {
    return (
        <View style={[Layouts.flexFill, Metrics.mLR24]}>
            <View style={Layouts.flexRowSpaceBetween}>
                <View style={[Layouts.column, Metrics.mt6]}>
                    <Label labelStyle={[AppFontSizes.mulishRegularF12]} label={labels.LENGTH} />
                    <Label labelStyle={[AppFontSizes.mulishRegularF12, Metrics.mt6, { color: Colors.BLACK }]} label={convertMovieRuntimeToHrsMin(runtime)} />
                </View>
                <View style={[Layouts.column, Metrics.mt6]}>
                    <Label labelStyle={[AppFontSizes.mulishRegularF12]} label={labels.LANGUAGE} />
                    <Label labelStyle={[AppFontSizes.mulishRegularF12, Metrics.mt6, { color: Colors.BLACK }]} label={language} />
                </View>
                <View style={[Layouts.column, Metrics.mt6]}>
                    <Label labelStyle={[AppFontSizes.mulishRegularF12]} label={labels.RATING} />
                    <Label labelStyle={[AppFontSizes.mulishRegularF12, Metrics.mt6, { color: Colors.BLACK }]} label={rating} />
                </View>
            </View>
        </View>
    )
}

export default OverviewCard