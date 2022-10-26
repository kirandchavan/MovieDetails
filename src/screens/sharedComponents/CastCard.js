import React from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import ImagePath from '../../utils/ImagePath';
import AppStyles from '../../themes/AppStyles';
import Metrics from '../../themes/Metrics';
import TitleCard from './TitleCard';
import Colors from '../../themes/Colors';
import AppFontSizes from '../../themes/AppFontSizes';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.22)

const CastCard = ({ item, index }) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.container} onPress={() => { '' }}>
                <Image source={ImagePath(item.profile_path)}
                    style={[AppStyles.fullWidthImg, { resizeMode: 'contain', borderRadius: 15 }]} />
            </View>
            <View style={Metrics.mt12}>
                <TitleCard
                    title={item.name}
                    hideRating={true}
                    style={[AppFontSizes.mulishRegularF12, { width: ITEM_WIDTH, marginRight: 13, color: Colors.CASTNAME }]}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: ITEM_WIDTH,
        minHeight: 100,
    },
})

export default CastCard
