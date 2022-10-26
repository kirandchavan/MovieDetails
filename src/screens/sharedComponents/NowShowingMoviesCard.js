import React from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import ImagePath from '../../utils/ImagePath';
import AppStyles from '../../themes/AppStyles';
import Metrics from '../../themes/Metrics';
import TitleCard from './TitleCard';
import Colors from '../../themes/Colors';
import { useNavigation } from '@react-navigation/native';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.37)

const NowShowingMoviesCard = ({ item, index }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => navigation.navigate('MovieDescription', { movieId: item.id })}>
            <View style={styles.container} onPress={() => { '' }}>
                <Image source={ImagePath(item.poster_path)} style={[AppStyles.fullWidthImg, { borderRadius: 8 }]} />
            </View>
            <View style={Metrics.mt12}>
                <TitleCard
                    title={item.media_type === 'movie' ? item.title : item.name}
                    avgRating={item.vote_average}
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
        marginRight: 16,
        minHeight: 212,
        marginTop: 17
    },
})

export default NowShowingMoviesCard
