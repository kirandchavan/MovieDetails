import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native';
import AppFontSizes from '../themes/AppFontSizes';
import AppStyles from '../themes/AppStyles';
import Layouts from '../themes/Layouts';
import Metrics from '../themes/Metrics';
import Label from './Label';

const Headers = ({ label, leftIcon, onLeftIconPress, rightIcon, onRightIconPress }) => {
    return (
        <View style={[Layouts.flexRowSpaceBetween, AppStyles.navBarStyle]}>
            <TouchableOpacity
                activeOpacity={1}
                style={{ alignSelf: 'center', zIndex: 999 }}
                onPress={onLeftIconPress}
                hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                <Image source={leftIcon} style={AppStyles.backIconHeader} />
            </TouchableOpacity>
            <Label labelStyle={AppFontSizes.merriweather900} label={label} />
            <TouchableOpacity
                activeOpacity={1}
                style={{ alignSelf: 'center', zIndex: 999 }}
                onPress={onRightIconPress}
                hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                <Image source={rightIcon} style={AppStyles.backIconHeader} />
            </TouchableOpacity>
        </View>
    )
}

export default Headers;
