import { View, Text } from 'react-native'
import React from 'react'
import { subHeadings } from '../../constants/TextConstants'
import Label from '../../components/Label'
import AppFontSizes from '../../themes/AppFontSizes'
import RenderHtmlContent from '../../components/RenderHtmlContent'
import Metrics from '../../themes/Metrics'

const MovieDetails = ({ overview }) => {
    return (
        <View>
            <Label labelStyle={AppFontSizes.merriweather900} label={subHeadings.NOW_SHOWING} />
            <View style={Metrics.mt8}>
                <RenderHtmlContent html={overview} />
            </View>
        </View>
    )
}

export default MovieDetails